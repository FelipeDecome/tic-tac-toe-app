import { Module } from '@nestjs/common';
import { RoomsServiceModule } from '../service/rooms.service.module';
import { RoomController } from './room.controller';

@Module({
  imports: [RoomsServiceModule],
  controllers: [RoomController],
})
export class RoomsControllerModule {}
