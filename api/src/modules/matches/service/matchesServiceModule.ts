import { Module } from '@nestjs/common';
import { CreateRoomService } from './createRoomService';

@Module({
  providers: [CreateRoomService],
  exports: [CreateRoomService],
})
export class MatchesServiceModule {}
