import { Injectable } from "@nestjs/common";
import { Roles, User } from "@prisma/client";
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

    async findRolebyId(id: any): Promise<Roles | null> {
        try {
            const role: Roles | null = await this.prisma.roles.findUnique({
                where: {
                    id: id,
                },
                include:{
                    users:true
                }
            
            });

            return role;
        } catch (error) {
            console.error('Error fetching role:', error);
            throw new Error('Failed to fetch role');
        }
    }

    async roleExists({ type }: { type: string }) {
        const role = await this.prisma.roles.findFirst({
            where: { type: type }
        })

        return !!role;
    }
}
export default RolesService;