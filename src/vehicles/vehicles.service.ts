import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { VehicleRepository } from './vehicle.repository';
import { Vehicle } from './schema/vehicle.schema';

@Injectable()
export class VehiclesService {
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleRepository.create(createVehicleDto);
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.findAll();
  }

  async findById(id: string): Promise<Vehicle> {
    return this.vehicleRepository.findById(id);
  }

  // async update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
  //   return this.vehicleRepository.update(id, updateVehicleDto);
  // }


  async delete(id: string): Promise<Vehicle> {
    return this.vehicleRepository.delete(id);
  }
}
