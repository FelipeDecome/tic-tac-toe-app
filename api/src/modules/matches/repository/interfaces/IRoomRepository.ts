import { ICreateRoomDTO } from '@modules/matches/dtos/ICreateRoomDTO';
import { Room } from '@prisma/client';

export interface IRoomRepository {
  create(data: ICreateRoomDTO): Promise<Room>;
}
