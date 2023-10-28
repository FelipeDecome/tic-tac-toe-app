import { Module } from '@nestjs/common';
import { RoomsControllerModule } from './controller/rooms.controller.module';

@Module({
  imports: [RoomsControllerModule],
})
export class RoomsModule {}
