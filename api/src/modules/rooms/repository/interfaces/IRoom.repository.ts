import { ICreateRoomDTO } from '@modules/rooms/dtos/ICreateRoom.dto';
import { Room } from '@modules/rooms/entities/room.entity';

export abstract class IRoomRepository {
  abstract create(data: ICreateRoomDTO): Promise<Room>;
}
