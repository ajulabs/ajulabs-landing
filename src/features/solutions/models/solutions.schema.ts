import { z } from 'zod';

export const serviceSchema = z.object({
  id: z.string(),
  number: z.string(),
  title: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  image: z.string().optional(),
});

export const servicesSchema = z.object({
  services: z.array(serviceSchema),
});

export type Service = z.infer<typeof serviceSchema>;
export type ServicesSchema = z.infer<typeof servicesSchema>;

