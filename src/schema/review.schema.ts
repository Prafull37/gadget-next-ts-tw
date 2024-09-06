import { z } from 'zod';

export const reviewSchema = z.object({
  id: z.string().uuid(),
  user: z.string().readonly(),
  user_id: z.string().or(z.undefined()).readonly(),
  product_id: z.string().uuid(),
  rating: z.number().or(z.undefined()),
  review: z.string().or(z.undefined()),
  date: z.string().datetime(),
});

export type ReviewFormSchemaType = z.infer<typeof reviewSchema>;
