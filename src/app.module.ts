import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dbAdmin',
      password: 'dbAdmin',
      database: 'node-nest-typeorm',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule
  ],
  controllers: [AppController,UsersController],
  providers: [AppService,UsersService],
})
export class AppModule {}
