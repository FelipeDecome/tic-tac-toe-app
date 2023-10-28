import { Module } from '@nestjs/common';
import { ConfigModule } from '@shared/config/config.module';
import { RoomsModule } from '@modules/rooms/rooms.module';

@Module({
  imports: [ConfigModule, RoomsModule],
})
export class AppModule {}
