import { Module } from '@nestjs/common';
import { ConfigService } from './configService';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
