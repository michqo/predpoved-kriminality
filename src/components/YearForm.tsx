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
import { FormSchema } from '@/lib/schemas';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

interface FormProps {
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
  form: UseFormReturn<{
    year: number;
  }>;
}

function YearForm({ onSubmit, form }: FormProps) {
  return (
    <>
      <div className="w-full max-w-md">
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
    </>
  );
}

export default YearForm;
