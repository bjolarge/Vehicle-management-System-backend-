import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { VehicleSchema, Vehicle } from './schema/vehicle.schema';
import { VehicleRepository } from './vehicle.repository';

@Module({
  imports:[
  MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  providers: [VehiclesService, VehicleRepository],
  controllers: [VehiclesController],
  exports:[VehicleRepository]
})
export class VehiclesModule {}
