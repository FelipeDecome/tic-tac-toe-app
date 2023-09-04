import { init } from '@paralleldrive/cuid2';
import { Injectable } from '@nestjs/common';
import { RoomRepository } from '../repository/implementations/prisma/roomRepository';

const createId = init({
  length: 6,
});
@Injectable()
export class CreateRoomService {
  constructor(private roomRepository: RoomRepository) {}

  async execute() {
    const code = createId();

    const room = await this.roomRepository.create({
      code: code,
    });

    return room;
  }
}
