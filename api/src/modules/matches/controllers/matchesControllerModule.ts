import { Module } from '@nestjs/common';
import { RoomController } from './roomController';
import { MatchesServiceModule } from '../service/matchesServiceModule';

@Module({
  imports: [MatchesServiceModule],
  controllers: [RoomController],
})
export class MatchesControllerModule {}
