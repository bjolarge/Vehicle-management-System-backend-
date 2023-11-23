import { Module } from '@nestjs/common';
import { QrService } from './qr.service';
import { QrController } from './qr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { QrBadge, QrCodeSchema } from './schemas/qr.schema';
import { QrStats, QrStatsSchema } from './schemas/qr.stats.schema';
import { QrType, QrTypeSchema } from './schemas/qr.type.schema';
import { Vehicle, VehicleSchema } from 'src/vehicles/schema/vehicle.schema';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { QrRepository } from './qr.repository';
import { QrTypeService } from './qr.type.service';



@Module({
  //imports:[TypeOrmModule.forFeature([Qrcode])],
  imports: [
    VehiclesModule,
    MongooseModule.forFeature([
      { name: QrBadge.name, schema: QrCodeSchema },
      { name: QrStats.name, schema: QrStatsSchema },
      { name: QrType.name, schema: QrTypeSchema },
      { name: Vehicle.name, schema: VehicleSchema },
    ])
  ],
  controllers: [QrController],
  providers: [QrService, QrRepository,QrTypeService],
  //exports:[QrService]
})
export class QrModule {}
