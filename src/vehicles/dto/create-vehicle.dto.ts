import { IsString, IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
    @IsNotEmpty()
    @IsString()
     name: string;
  
    @IsNotEmpty()
    @IsString()
    readonly model: string;
}
