import { init } from '@paralleldrive/cuid2';
import { ICUIDService } from '../interface/ICUID.service';

export class CUUID2Service implements ICUIDService {
  generate(options = { length: 8 }): string {
    const createId = init(options);
    return createId();
  }
}
