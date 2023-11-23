import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Document } from "mongoose";
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';


export const UserSchema=new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},

})

export type UserDocument = User & Document;


UserSchema.pre('save', async function(next) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
      const hashed = await bcrypt.hash(this['password'], 10);
      this['password'] = hashed;
      return next();
    } catch (err) {
      return next(err);
    }
  });

  @Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class User {
    // @Prop({ required: true, unique: true })
    // username: string

    @Prop({ required: true })
    password: string

    @Prop({ required: true, unique: true })
    email: string

    @Prop()
    refreshToken: string

}


const UserSchemas = SchemaFactory.createForClass(User)



export { UserSchemas };