import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { QrBadge } from '../../qrcode/schemas/qr.schema';

export type CustomerDocument = Vehicle & Document;

@Schema()
export class Vehicle {
    @Prop()
    name: string;
    @Prop()
    model:string;

    @Prop({
        type: [{ type: [{type: mongoose.Schema.Types.ObjectId, ref: 'QrCode' }]}],
      })
      qr_code_id?: QrBadge[];
}
export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
