import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { RolesService } from 'src/roles/roles.service';
import { RolesModule } from 'src/roles/roles.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]),RolesModule],
    controllers: [UsersController],
    providers: [UsersService,RolesService],
    exports: [TypeOrmModule]
})
export class UserModule { }