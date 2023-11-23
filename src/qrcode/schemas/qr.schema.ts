import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Vehicle } from '../../vehicles/schema/vehicle.schema';
import { QrType } from './qr.type.schema';

export interface QrBadge {
  id: string;
  data: string;
  image: Buffer;
  vehicle_id: Vehicle;
  type: QrType;
}

export type QrCodeDocument = QrBadge & Document;

@Schema()
export class QrBadge {
  @Prop()
  data: string;

  @Prop({ type: Buffer })
  image: Buffer;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customer_id: Vehicle;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'QrType' })
  type: QrType;
}

export const QrCodeSchema = SchemaFactory.createForClass(QrBadge);