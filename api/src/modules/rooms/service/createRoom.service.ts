import { init } from '@paralleldrive/cuid2';
import { Injectable } from '@nestjs/common';
import { IRoomRepository } from '../repository/interfaces/IRoom.repository';

const createId = init({
  length: 8,
});

@Injectable()
export class CreateRoomService {
  constructor(private roomRepository: IRoomRepository) {}

  async execute() {
    const code = createId();

    const room = await this.roomRepository.create({
      code: code,
    });

    return room;
  }
}
