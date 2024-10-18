import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

import { WebsocketModule } from './websockets/websocket.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, WebsocketModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


