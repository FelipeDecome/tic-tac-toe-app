import { ICreateRoomDTO } from '@modules/rooms/dtos/ICreateRoom.dto';
import { Room } from '@prisma/client';

export abstract class IRoomRepository {
  abstract create(data: ICreateRoomDTO): Promise<Room>;
}
