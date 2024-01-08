import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { RegisterDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private userService: UsersService
    ) { }

    async signUp({
        email,
        firstName,
        lastName,
        username,
        role,
        password
    }: RegisterDto): Promise<User | void> {

        const newUser: User = await this.prisma.user.create({
            data: { email, username, role }
        })

        return newUser;
    }
}


export default AuthService;