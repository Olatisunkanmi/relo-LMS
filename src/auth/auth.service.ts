import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserSignUpDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    async login() {
        return 'Login';
    }
}
