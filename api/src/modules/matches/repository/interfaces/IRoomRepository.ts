import { ICreateRoomDTO } from '@modules/matches/dtos/ICreateRoomDTO';
import { Room } from '@prisma/client';

export abstract class IRoomRepository {
  abstract create(data: ICreateRoomDTO): Promise<Room>;
}
