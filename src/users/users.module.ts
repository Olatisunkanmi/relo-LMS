import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    exports: [UsersService],
    providers: [PrismaService, UsersService],
    controllers: [UsersController],
})

export class UserModule {}