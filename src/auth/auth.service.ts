import { Injectable } from '@nestjs/common';
import Payload  from '../user/types/payload';
import { sign } from 'jsonwebtoken';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import JwtPayload from './jwtPayload.interface';
import { AuthDto } from './dto/auth.dto';


@Injectable()
export class AuthService {

  constructor(private userService: UserService,
    private configService: ConfigService,
    private jwtService: JwtService) {}
  
  async signPayload(payload: Payload) {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
  }
  async validateUser(payload: Payload) {
    return await this.userService.findByPayload(payload);
  }

  public async getUserFromAuthenticationToken(token: string) {
    const payload: JwtPayload = this.jwtService.verify(token, {
      secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
    });
    
    const userId = payload.sub

    if (userId) {
        return this.userService.findById(userId);
    }
  }


}