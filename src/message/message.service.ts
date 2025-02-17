import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { Model } from 'mongoose';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}
  async sendMessage(
    sender: string,
    conversation: string,
    content: string,
    attachments?: string[],
  ): Promise<Message> {
    const message = new this.messageModel({
      sender,
      conversation,
      content,
      attachments,
    });
    return message.save();
  }

  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return this.messageModel.find({ conversation: conversationId }).exec();
  }
}
