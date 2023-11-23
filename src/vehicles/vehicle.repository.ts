import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle } from './schema/vehicle.schema';

@Injectable()
export class VehicleRepository {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
  ) {}

  async create(vehicle: Vehicle): Promise<Vehicle> {
    const createdVehicle = new this.vehicleModel(vehicle);
    return await createdVehicle.save();
  }

  async findById(id: string): Promise<Vehicle> {
    return await this.vehicleModel.findById(id).exec();
  }

  async update(id: string, vehicle: Vehicle): Promise<Vehicle> {
    return await this.vehicleModel.findByIdAndUpdate(id, vehicle, {
      new: true,
    });
  }

  async delete(id: string): Promise<Vehicle> {
    return await this.vehicleModel.findByIdAndRemove(id);
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.vehicleModel.find().exec();
  }

  async addQrCodeAfterGenerated(customer_id: string, qrCodeId: string) {
    return await this.vehicleModel.updateOne(
      { _id: customer_id },
      { qr_code_id: qrCodeId },
    );
  }
}