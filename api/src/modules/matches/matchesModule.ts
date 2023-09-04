import { Module } from '@nestjs/common';
import { MatchesControllerModule } from './controllers/matchesControllerModule';

@Module({
  imports: [MatchesControllerModule],
})
export class MatchesModule {}
