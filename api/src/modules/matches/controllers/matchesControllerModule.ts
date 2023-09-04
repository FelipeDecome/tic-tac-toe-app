import { Module } from '@nestjs/common';
import { RoomController } from './roomController';

@Module({
  controllers: [RoomController],
})
export class MatchesControllerModule {}
