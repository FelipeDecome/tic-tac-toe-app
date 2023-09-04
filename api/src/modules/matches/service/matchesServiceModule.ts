import { Module } from '@nestjs/common';
import { CreateRoomService } from './createRoomService';
import { MatchesRepositoryModule } from '../repository/repositoryModule';

@Module({
  imports: [MatchesRepositoryModule],
  providers: [CreateRoomService],
  exports: [CreateRoomService],
})
export class MatchesServiceModule {}
