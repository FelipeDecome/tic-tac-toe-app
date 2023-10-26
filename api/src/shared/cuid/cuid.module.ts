import { Module, Provider } from '@nestjs/common';
import { ICUIDService } from './interface/ICUID.service';
import { CUUID2Service } from './implementations/cuid2.service';

const providers: Provider[] = [
  {
    provide: ICUIDService,
    useClass: CUUID2Service,
  },
];

@Module({
  providers: providers,
  exports: providers,
})
export class CUIDModule {}
