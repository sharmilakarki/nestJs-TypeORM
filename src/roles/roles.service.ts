import { Injectable } from '@nestjs/common';
import { Roles } from './roles.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesDto } from './dto/roles.dto';

@Injectable()
export class RolesService {

    constructor(@InjectRepository(Roles) private readonly rolesRepository: Repository<Roles>, ) { }

    findAll(): Promise<Roles[]> {
        return this.rolesRepository.find();
    }

    async findRolesByType(roleType: string): Promise<Roles> {
        return await this.rolesRepository.findOne({
            where: {
                type: roleType
            }
        });
    }
  
    async addRoles(dto: RolesDto): Promise<Roles> {
        console.log(" Test")
        
        const roles = (await this.findRolesByType(dto.roleType));
      
        if (roles === undefined) {
            console.log("what")
            const roles = new Roles();
            roles.description = dto.description;
            roles.type = dto.roleType;

            return await this.rolesRepository.save(roles);
        }
        else {
            throw new Error("Roles not found.")
        }

    }
    
}
