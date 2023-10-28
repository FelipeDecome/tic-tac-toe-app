import { Module, Provider } from '@nestjs/common';
import { PrismaModule } from '@shared/prisma/prisma.module';
import { RoomRepository } from './implementations/prisma/room.repository';
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
