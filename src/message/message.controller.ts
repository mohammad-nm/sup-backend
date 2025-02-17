import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async sendMessage(
    @Body()
    body: {
      sender: string;
      conversation: string;
      content: string;
      attachments?: string[];
    },
  ) {
    return this.messageService.sendMessage(
      body.sender,
      body.conversation,
      body.content,
      body.attachments,
    );
  }

  @Get('conversation/:conversationId')
  async getMessages(@Param('conversationId') conversationId: string) {
    return this.messageService.getMessagesByConversation(conversationId);
  }
}
