import { Module } from '@nestjs/common';
import { CreateRoomService } from './createRoom.service';
import { RoomsRepositoryModule } from '../repository/rooms.repository.module';

@Module({
  imports: [RoomsRepositoryModule],
  providers: [CreateRoomService],
  exports: [CreateRoomService],
})
export class RoomsServiceModule {}
