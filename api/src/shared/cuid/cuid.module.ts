import { Module, Provider } from '@nestjs/common';
import { CUUID2Service } from './implementations/cuid2.service';
import { ICUIDService } from './interface/ICUID.service';

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
