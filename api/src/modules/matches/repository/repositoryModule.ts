import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RoomRepository } from './implementations/prisma/roomRepository';

@Module({
  imports: [PrismaClient, RoomRepository],
  exports: [RoomRepository],
})
export class MatchesRepositoryModule {}
