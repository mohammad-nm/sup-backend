import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  Conversation,
  ConversationDocument,
} from './schemas/conversation.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel(Conversation.name)
    private readonly conversationModel: Model<ConversationDocument>,
  ) {}
  async createConversation(
    type: string,
    participants: string[],
  ): Promise<Conversation> {
    const conversation = new this.conversationModel({ type, participants });
    return conversation.save();
  }

  async getConversationsForUser(userId: string): Promise<Conversation[]> {
    return this.conversationModel.find({ participants: userId }).exec();
  }
}
