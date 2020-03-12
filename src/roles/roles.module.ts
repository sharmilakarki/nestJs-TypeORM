import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './roles.entity';
import { UsersService } from 'src/users/users.service';
import { UserModule } from 'src/users/users.module';

@Module({
    imports: [TypeOrmModule.forFeature([Roles])],
    controllers: [RolesController],
    providers: [RolesService],
    exports: [TypeOrmModule]
})
export class RolesModule { }
