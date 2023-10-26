import { Injectable } from '@nestjs/common';
import { IRoomRepository } from '../repository/interfaces/IRoom.repository';
import { ICUIDService } from '@shared/cuid/interface/ICUID.service';

@Injectable()
export class CreateRoomService {
  constructor(
    private roomRepository: IRoomRepository,
    private cuidService: ICUIDService,
  ) {}

  async execute() {
    const code = this.cuidService.generate({ length: 8 });

    const room = await this.roomRepository.create({
      code: code,
    });

    return room;
  }
}
