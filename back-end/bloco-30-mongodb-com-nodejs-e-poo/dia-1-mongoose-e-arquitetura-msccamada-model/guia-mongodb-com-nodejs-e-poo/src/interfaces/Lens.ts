// ./src/interfaces/Lens.ts

import { z } from 'zod';

// Estrutura semelhate a do joi
const lensZodSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean() });

type ILens = z.infer<typeof lensZodSchema>;

export default ILens;
export { lensZodSchema };