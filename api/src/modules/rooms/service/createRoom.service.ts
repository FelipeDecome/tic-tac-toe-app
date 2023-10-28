import { Injectable } from '@nestjs/common';
import { ICUIDService } from '@shared/cuid/interface/ICUID.service';
import { IRoomRepository } from '../repository/interfaces/IRoom.repository';

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
