import { Injectable } from "@nestjs/common";
import { Roles } from "@prisma/client";
import { RolesDto } from "./dto/roles.dto";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
class RolesService {
    constructor(
        private readonly prisma: PrismaService
    ) {

    }

    async createRole({
        type
    }: RolesDto): Promise<Roles | void> {

        const newRole: Roles = await this.prisma.roles.create({
            data: { type }
        })

        return newRole;
    }

    async fetchAllRoles(): Promise<Roles[] | null> {
        try {
            const roles: Roles[] = await this.prisma.roles.findMany();
            return roles;
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw new Error('Failed to fetch roles');
        }
    }
}
export default RolesService;