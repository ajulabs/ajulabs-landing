import { z } from 'zod';

export const homeSchema = z.object({
  example: z.string().optional(),
});

export type HomeSchema = z.infer<typeof homeSchema>;

