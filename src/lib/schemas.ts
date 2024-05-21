import { z } from 'zod';

const FormSchema = z.object({
  year: z.coerce
    .number({ required_error: 'Rok je požadovaný.', invalid_type_error: 'Rok musí byť číslo.' })
    .positive({
      message: 'Rok musi byt viac ako 0'
    })
    .min(2020, {
      message: 'Rok musi byt aspon 2020.'
    })
    .max(2040, {
      message: 'Rok musi byt najviac 2040.'
    })
});

export { FormSchema };
