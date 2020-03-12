import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/roles.entity';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dbAdmin',
      password: 'dbAdmin',
      database: 'node-nest-typeorm',
      entities: [User,Roles],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    RolesModule,
  ],
  controllers: [AppController,UsersController,RolesController],
  providers: [AppService,UsersService,RolesService],
})
export class AppModule {}
