import { ICreateRoomDTO } from '@modules/rooms/dtos/ICreateRoom.dto';
import { IRoomRepository } from '../../interfaces/IRoom.repository';
import { Room } from '@prisma/client';
import { PrismaService } from '@shared/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomRepository implements IRoomRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: ICreateRoomDTO): Promise<Room> {
    const room = await this.prismaService.room.create({ data });
    return room;
  }
}
