import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateRoomService {
  async execute() {
    return {
      id: '123',
      code: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
