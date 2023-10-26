import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomsServiceModule } from '../service/rooms.service.module';

@Module({
  imports: [RoomsServiceModule],
  controllers: [RoomController],
})
export class RoomsControllerModule {}
