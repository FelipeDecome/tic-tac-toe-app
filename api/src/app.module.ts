import { RoomsModule } from '@modules/rooms/rooms.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@shared/config/config.module';

@Module({
  imports: [ConfigModule, RoomsModule],
})
export class AppModule {}
