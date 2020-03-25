import { OnGatewayInit, WsResponse, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    wss: any;
    private logger;
    afterInit(server: Server): void;
    handleConnection(client: Socket, ...args: []): {
        event: string;
        data: string;
    };
    handleDisconnect(client: Socket): void;
    handleMessage(client: Socket, payload: any): WsResponse<string>;
}
