import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module'; 
import { ShopsModule } from './modules/shops/shops.module';
require('dotenv').config();

const password = process.env.DB_PASSWORD || '';

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
    UsersModule,
    ShopsModule,
  ],
})
export class AppModule {}
