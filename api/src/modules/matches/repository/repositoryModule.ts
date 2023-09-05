import { Module } from '@nestjs/common';
import { RoomRepository } from './implementations/prisma/roomRepository';
import { PrismaModule } from '@shared/prisma/prismaModule';
import { IRoomRepository } from './interfaces/IRoomRepository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: IRoomRepository,
      useClass: RoomRepository,
    },
  ],
  exports: [RoomRepository],
})
export class MatchesRepositoryModule {}
