import { Get, Body, Controller, Post } from '@nestjs/common'
import { RolesDto } from './dto/roles.dto'
import RolesService from './roles.service'

@Controller('admin')
class RolesController {
    constructor(private readonly roleservice: RolesService) { }

    @Post('role')
    async createRole(@Body() createRoleRequest: RolesDto) {
        return this.roleservice.createRole(createRoleRequest)
    }

    @Get('role')
    async fetchAllRoles() {
        try {
          const roles = await this.roleservice.fetchAllRoles();
         
          return roles;
        } catch (error) {
          return { error: 'Failed to fetch roless' };
        }
      }
}

export default RolesController