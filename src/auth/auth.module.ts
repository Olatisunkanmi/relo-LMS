import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import  AuthService from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/users/users.module';
import RolesService from 'src/roles/roles.service';

@Module({
    imports: [UserModule],
    controllers: [AuthController],  
    providers: [AuthService, PrismaService, RolesService]
})

export class AuthModule {}