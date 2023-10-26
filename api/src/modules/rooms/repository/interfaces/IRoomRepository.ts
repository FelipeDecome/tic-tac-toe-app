import { ICreateRoomDTO } from '@modules/rooms/dtos/createRoom.dto';
import { Room } from '@prisma/client';

export abstract class IRoomRepository {
  abstract create(data: ICreateRoomDTO): Promise<Room>;
}
