import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UserSchemas } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchemas }]),
   
  ],
  providers: [UserService],
  controllers: [],
  exports: [UserService],

})
export class UserModule {}