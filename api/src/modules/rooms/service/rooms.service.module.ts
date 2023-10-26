import { Module } from '@nestjs/common';
import { CreateRoomService } from './createRoomService';
import { RoomsRepositoryModule } from '../repository/module';

@Module({
  imports: [RoomsRepositoryModule],
  providers: [CreateRoomService],
  exports: [CreateRoomService],
})
export class RoomsServiceModule {}
