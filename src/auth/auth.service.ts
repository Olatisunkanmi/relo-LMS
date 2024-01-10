import { Injectable } from '@nestjs/common';
import { User, Roles } from '@prisma/client';
import { RegisterDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { error } from 'console';
import RolesService from 'src/roles/roles.service';

@Injectable()
class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private userService: UsersService,
        private roleService: RolesService
    ) { }

    async signUp({
        email,
        firstName,
        lastName,
        username,
        role,
        password
    }: RegisterDto): Promise<User | void> {

    
        if (!await this.roleService.roleExists({ type: role })) {
            throw new Error('Role does not exist');
        }

        const exRole = await this.prisma.roles.findFirst({
            where : {type: role}
        })

        const newUser: User = await this.prisma.user.create({
            data: { email, username, role: {
                connect: {
                    id:exRole.id
                }
            } }
        })

        return newUser;
    }
}


export default AuthService;