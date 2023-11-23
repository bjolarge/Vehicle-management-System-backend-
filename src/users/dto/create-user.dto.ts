import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Match } from "../decorators/match.decorator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    @Match('password', { message: 'Passwords should match'})
    passwordConfirm: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string
   
    refreshToken: string;

}