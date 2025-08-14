import { z } from 'zod';

export const threadSchema = z.object({
  title: z.string().min(3).max(160),
  content: z.string().min(3).max(20000),
  category_id: z.number().int()
});

export const postSchema = z.object({
  thread_id: z.number().int(),
  content: z.string().min(1).max(20000)
});
