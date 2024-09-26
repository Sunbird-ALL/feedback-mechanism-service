import { flatten } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class feedback extends Document {

  @Prop({ required: true, index: false})
  virtual_id: string;

  @Prop({required: true, index: false})
  original_text: string;

  @Prop({ required: true, index: false})
  response_text_audio_url: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}
export type feedbackDocument = feedback & Document;

export const feedbackSchema = SchemaFactory.createForClass(feedback);
