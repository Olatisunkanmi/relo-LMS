import { Module } from "@nestjs/common";
import RolesController from "./roles.controller";
import RolesService from "./roles.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    imports: [],
    providers: [RolesService, PrismaService],
    controllers: [RolesController],
})

export class RolesModule{}