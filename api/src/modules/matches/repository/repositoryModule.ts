import { Module } from '@nestjs/common';
import { RoomRepository } from './implementations/prisma/roomRepository';
import { PrismaModule } from '@shared/prisma/prismaModule';

@Module({
  imports: [PrismaModule],
  providers: [RoomRepository],
  exports: [RoomRepository],
})
export class MatchesRepositoryModule {}
