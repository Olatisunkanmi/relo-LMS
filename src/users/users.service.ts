import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(
        private readonly prisma: PrismaService
    ){

    }

    async userExists({ email, username }: { username: string; email: string }) {
        const user = await this.prisma.user.findFirst({
          where: { OR: [{ email }, { username }] },
        });
    
        return !!user;
      }
}
