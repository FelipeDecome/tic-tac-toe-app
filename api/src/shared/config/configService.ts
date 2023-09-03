import { Injectable } from '@nestjs/common';
import { envVariables } from './envs';

@Injectable()
export class ConfigService {
  get app() {
    return {
      port: envVariables.PORT,
    };
  }
}
