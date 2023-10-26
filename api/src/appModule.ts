import { Module } from '@nestjs/common';
import { ConfigModule } from '@shared/config/configModule';
import { RoomsModule } from '@modules/rooms/module';

@Module({
  imports: [ConfigModule, RoomsModule],
})
export class AppModule {}
