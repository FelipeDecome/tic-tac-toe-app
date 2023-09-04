import { Controller, Post } from '@nestjs/common';

@Controller('room')
export class RoomController {
  @Post()
  async create() {
    return { message: 'Room created' };
  }
}
