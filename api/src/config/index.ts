import { z } from 'zod';

const envVariablesSchema = z.object({
  PORT: z.string().default('3000'),
});

const parsedEnvVariables = envVariablesSchema.safeParse(process.env);

if (parsedEnvVariables.success === false) {
  throw new Error(
    `Config validation error: ${parsedEnvVariables.error.message}`,
  );
}

export const envVariables = parsedEnvVariables.data;
