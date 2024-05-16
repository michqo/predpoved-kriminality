import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Modal from './components/Modal';
import { useState } from 'react';

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

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // @ts-expect-error: Blank value
      year: ''
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(`You submitted the following values: \n${JSON.stringify(data, null, 2)}`);
    setModalOpen(true);
  }

  return (
    <>
      <Modal open={modalOpen} onOpenChange={setModalOpen} />
      <div className="relative grid h-screen grid-flow-row grid-rows-3 justify-center">
        <div className="relative row-span-1 flex flex-col items-center bg-background text-foreground">
          <h1 className="mt-12 text-4xl font-extrabold text-slate-800">PREDPOVEĎ KRIMINALITY</h1>
          <h2 className="text-2xl font-bold text-blue-500">VYBRAŤ ROK</h2>
        </div>
        <div className="row-span-2 flex w-screen max-w-md flex-col">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rok</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Rok na predpoveď.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Vypočítať</Button>
            </form>
          </Form>
        </div>
        <img src="/icon.png" alt="My Image" className="absolute ml-5 h-56 w-72 object-contain" />
      </div>
    </>
  );
}

export default App;
