import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { UsersDto } from './dto/users.dto';

@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async createUser(@Body() dto: UsersDto): Promise<User> {
    return await this.userService.createUser(dto);
  }

  @Put(':id/roles')
  async assignRolesToUser(@Body() dto: UsersDto,@Param() id:number):Promise<User>{
    return await this.userService.assignRoles(id,dto);
  }
}
