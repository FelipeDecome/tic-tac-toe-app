import { Module } from '@nestjs/common';
import { MatchesModule } from '@modules/matches/matchesModule';
import { ConfigModule } from '@shared/config/configModule';

@Module({
  imports: [ConfigModule, MatchesModule],
})
export class AppModule {}
