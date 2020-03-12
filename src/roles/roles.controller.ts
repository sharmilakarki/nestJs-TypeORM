import { Controller, Get, Post, Body } from '@nestjs/common';
import { Roles } from './roles.entity';
import { RolesService } from './roles.service';
import { RolesDto } from './dto/roles.dto';

@Controller('roles')
export class RolesController {

    constructor( private readonly rolesService: RolesService) { }

    @Get()
    findAll(): Promise<Roles[]> {
        return this.rolesService.findAll();
    }

    @Post()
    async createRoles(@Body() dto:RolesDto):Promise<Roles>{
        return await this.rolesService.addRoles(dto);
    }
}
