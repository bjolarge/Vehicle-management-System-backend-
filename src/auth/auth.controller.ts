import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { RegisterDTO } from '../user/dto/register.dto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginDTO } from '../auth/dto/login.dto';
import { AuthDto } from './dto/auth.dto';
import RequestWithUser from './requestWithUser.interface';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
        
      ) {}


      @Get("/onlyauth")
      @UseGuards(AuthGuard("jwt"))
  async hiddenInformation(){
    return  "hidden information";
  }
  @Get("/anyone")
async publicInformation(){
return  "this can be seen by anyone";
}

    @Post('register')
    async register(@Body() registerDTO: RegisterDTO) {
      const user = await this.userService.create(registerDTO);
      const payload = {
      
        email: user.email,
      };
  
      const token = await this.authService.signPayload(payload);
      return { user, token };
    }
    // @Post('login')
    // async login(@Body() loginDTO: LoginDTO) {
    //   const user = await this.userService.findByLogin(loginDTO);
      
    //   const payload = {
    //     email: user.email,
    //   };
    //   const token = await this.authService.signPayload(payload);
    //   return { user, token};
    // }  
    
    @Post('login')
    async logIn(@Req() request: RequestWithUser) {
     // const { user } = request;
       const user = request.user;
   // user.password = undefined;
    return user;
  }
}