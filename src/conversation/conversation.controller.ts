import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ConversationService } from './conversation.service';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}
  @Post()
  async createConversation(
    @Body() body: { type: string; participants: string[] },
  ) {
    return this.conversationService.createConversation(
      body.type,
      body.participants,
    );
  }

  @Get(':userId')
  async getConversations(@Param('userId') userId: string) {
    return this.conversationService.getConversationsForUser(userId);
  }
}
