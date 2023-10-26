import { Module, Provider } from '@nestjs/common';
import { RoomRepository } from './implementations/prisma/roomRepository';
import { PrismaModule } from '@shared/prisma/prismaModule';
import { IRoomRepository } from './interfaces/IRoomRepository';

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
