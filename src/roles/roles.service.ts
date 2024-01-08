import { Injectable } from "@nestjs/common";
import { Roles } from "@prisma/client";
import { RolesDto } from "./dto/roles.dto";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
class RolesService{
    constructor(
        private readonly prisma: PrismaService
    ) {
        
    }

    async createRole({
        type
    }: RolesDto): Promise<Roles | void>{
    
        const newRole: Roles = await this.prisma.roles.create({
            data: { type}
        })

        return newRole;
    }
}

export default RolesService;