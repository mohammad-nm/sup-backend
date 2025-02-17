import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private server: Server;
  afterInit(server: Server) {
    this.server = server;
    console.log('WebSocket Server Initialized');
  }
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
  @SubscribeMessage('send_message')
  handleMessage(
    @MessageBody() payload: any,
    @ConnectedSocket() client: Socket,
  ) {
    console.log('Received message:', payload);
    this.server.emit('receive_message', payload);
  }
}
