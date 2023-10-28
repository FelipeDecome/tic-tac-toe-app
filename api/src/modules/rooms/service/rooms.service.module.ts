import { Module, Provider } from '@nestjs/common';
import { CUIDModule } from '@shared/cuid/cuid.module';
import { RoomsRepositoryModule } from '../repository/rooms.repository.module';
import { CreateRoomService } from './createRoom.service';

const providers: Provider[] = [CreateRoomService];

@Module({
  imports: [RoomsRepositoryModule, CUIDModule],
  providers: providers,
  exports: providers,
})
export class RoomsServiceModule {}
