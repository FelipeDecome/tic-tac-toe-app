import { Module } from '@nestjs/common';
import { RoomController } from './roomController';
import { RoomsServiceModule } from '../service/rooms.service.module';

@Module({
  imports: [RoomsServiceModule],
  controllers: [RoomController],
})
export class RoomsControllerModule {}
