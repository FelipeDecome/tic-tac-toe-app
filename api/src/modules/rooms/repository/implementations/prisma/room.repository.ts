import { ICreateRoomDTO } from '@modules/rooms/dtos/ICreateRoom.dto';
import { Room } from '@modules/rooms/entities/room.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/prisma/prisma.service';
import { IRoomRepository } from '../../interfaces/IRoom.repository';

@Injectable()
export class RoomRepository implements IRoomRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: ICreateRoomDTO): Promise<Room> {
    const room = await this.prismaService.room.create({ data });
    return room;
  }
}
