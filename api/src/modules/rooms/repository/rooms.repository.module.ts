import { Module, Provider } from '@nestjs/common';
import { RoomRepository } from './implementations/prisma/room.repository';
import { PrismaModule } from '@shared/prisma/prisma.module';
import { IRoomRepository } from './interfaces/IRoom.repository';

const providers: Provider[] = [
  {
    provide: IRoomRepository,
    useClass: RoomRepository,
  },
];

@Module({
  imports: [PrismaModule],
  providers: providers,
  exports: providers,
})
export class RoomsRepositoryModule {}
