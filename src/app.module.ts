import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrModule } from './qrcode/qr.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesModule } from './vehicles/vehicles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { FeedbackModule } from './feedback/feedback.module';
import { UserModule } from './user/user.module';

@Module({
 imports:[
  MongooseModule.forRoot('mongodb://127.0.0.1:27017/xactwear'),

  ConfigModule.forRoot({ isGlobal: true}),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: +configService.get<number>('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: true,
    }),
    inject: [ConfigService],
  }),

  QrModule,
  VehiclesModule,
  UsersModule,
  UserModule,
  ChatsModule,
  FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
