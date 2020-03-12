import { Injectable, HttpException, HttpStatus, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UsersDto } from './dto/users.dto';
import { UsersController } from './users.controller';
import { RolesService } from 'src/roles/roles.service';
import e = require('express');

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>, 
     @Inject(forwardRef(()=>RolesService))   private readonly rolesService
    ) { }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findByEmailAddress(email: string): Promise<User> {
        return await this.usersRepository.findOne({
            where: {
                emailAddress: email
            }
        });
    }

    async createUser(dto: UsersDto): Promise<User> {
        const user = (await this.findByEmailAddress(dto.emailAddress));

        if (user === undefined) {

            const user = new User();
            user.active = dto.active;
            user.emailAddress = dto.emailAddress;
            user.name = dto.name;
            user.address = dto.address;

            return await this.usersRepository.save(user);

        } else {
            throw new Error('User already exists.');
        }
    }

    async assignRoles(userId: number, dto: UsersDto): Promise<User> {
        const user =(await this.usersRepository.findOne({
            where:{
                id:userId
            }
        }));
        if(user != undefined){
            const dbRoles= await this.rolesService.findRolesByType(dto.roles);
            if(dbRoles!=undefined){
                user.roles=dbRoles;
              return await  this.usersRepository.save(user);
            }else{
                throw new Error("Roles with this type not found.");
            }
        }else{
            throw new Error("User not found.")
        }
    }
}
