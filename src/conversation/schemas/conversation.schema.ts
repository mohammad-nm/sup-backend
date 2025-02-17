import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConversationDocument = Conversation & Document;

@Schema()
export class Conversation {
  @Prop({ required: true })
  type: string; // 'private' or 'group'

  @Prop({ type: [String], required: true })
  participants: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
