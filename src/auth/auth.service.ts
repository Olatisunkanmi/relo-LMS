import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserSignUpDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private userService: UsersService
    ) { }

    async signUp({
        email,
        firstName,
        lastName,
        password
    }: UserSignUpDto): Promise<User|void>{

    }
}
