import { Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateRoomService } from '../service/createRoom.service';

@Controller('room')
export class RoomController {
  constructor(private createRoomService: CreateRoomService) {}

  @Post()
  async create(@Res() response: Response) {
    const room = await this.createRoomService.execute();

    return response.status(HttpStatus.CREATED).json(room);
  }
}
