import { Module } from '@nestjs/common';
import { ConfigModule } from '@shared/config/configModule';

@Module({
  imports: [ConfigModule],
})
export class AppModule {}
