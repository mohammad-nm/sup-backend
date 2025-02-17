import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ required: true })
  sender: string;
  @Prop({ required: true })
  conversation: string;
  @Prop({ required: true })
  content: string;
  @Prop({ default: Date.now })
  createdAt: Date;
  @Prop()
  attachments?: string[];
}

export const MessageSchema = SchemaFactory.createForClass(Message);
