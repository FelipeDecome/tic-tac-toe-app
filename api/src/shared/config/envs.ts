import { z } from 'zod';
import { EnvValidationException } from '../errors/envValidation.exception';

const envVariablesSchema = z.object({
  PORT: z.coerce.number().default(3000),
});

const parsedEnvVariables = envVariablesSchema.safeParse(process.env);

if (parsedEnvVariables.success === false) {
  throw new EnvValidationException(parsedEnvVariables.error.message);
}

export const envVariables = parsedEnvVariables.data;
