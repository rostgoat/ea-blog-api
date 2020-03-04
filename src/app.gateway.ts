import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WsResponse,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() wss;
  private logger: Logger = new Logger('AppGateway');

  afterInit(server: Server) {
    this.logger.log('Initialized');
  }

  @SubscribeMessage('connected')
  handleConnection(client: Socket, ...args: []) {
    this.logger.log(`Client Connected`);
    return { event: 'connected', data: 'Server Connected' };
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnected`);
  }

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: any): WsResponse<string> {
    this.logger.log(`ping: ${JSON.stringify(payload)}`);
    return { event: 'msgToClient', data: payload };
  }
}
