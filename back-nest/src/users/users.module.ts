import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { UsersService } from './users.service';
import { UsersGateway } from './users.gateway';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, UsersGateway, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}
