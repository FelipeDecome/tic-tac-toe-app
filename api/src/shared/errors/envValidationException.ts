import { Exception } from './exception';

export class EnvValidationException extends Exception {
  constructor(message: string) {
    super('Env validation error: ' + message);
  }
}
