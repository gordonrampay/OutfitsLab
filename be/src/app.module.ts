import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { UsersModule } from './modules/users/users.module'; 
import { ShopsModule } from './modules/shops/shops.module';
require('dotenv').config();

const password = process.env.DB_PASSWORD || '';
=======
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
require('dotenv').config();

const password = process.env.DB_PASSWORD  || '';
>>>>>>> 51bed1d574c6d496c739f49c1df00c8330a9eb0e

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: password,
      database: 'outfitslab_db',
      autoLoadEntities: true,
      synchronize: true, 
    }),
<<<<<<< HEAD
    UsersModule,
    ShopsModule,
=======
    AuthModule,  
    UsersModule,
>>>>>>> 51bed1d574c6d496c739f49c1df00c8330a9eb0e
  ],
})
export class AppModule {}
