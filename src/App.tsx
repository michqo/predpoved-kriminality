import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Charts from './components/Charts';
import YearForm from './components/YearForm';
import { api, regions } from './lib/api';
import { FormSchema } from './lib/schemas';
import { DataShape } from './lib/types';

function App() {
  const [modalYear, setModalYear] = useState<number>();
  const [data, setData] = useState<DataShape>({});

  useEffect(() => {
    async function fetchData() {
      const data = await Promise.all(
        regions.map(async (region) => {
          const response = await api().region(region);
          return { [region]: response };
        })
      );
      const transformedData = data.reduce((acc, item) => {
        const [regionName, regionData] = Object.entries(item)[0];
        return { ...acc, [regionName]: regionData };
      }, {});
      setData(transformedData);
    }
    fetchData();
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // @ts-expect-error: Blank value
      year: ''
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setModalYear(data.year);
  }

  return (
    <>
      <div className="relative grid h-screen grid-flow-row grid-rows-3 justify-center">
        <div className="relative row-span-1 flex flex-col items-center bg-background text-foreground">
          <h1 className="mt-12 text-4xl font-extrabold text-slate-800">PREDPOVEĎ KRIMINALITY</h1>
          <h2 className="text-2xl font-bold text-blue-500">VYBRAŤ ROK</h2>
        </div>
        <div className="row-span-2 flex w-screen flex-col items-center">
          <div className="flex flex-wrap">
            {modalYear && <Charts data={data} year={modalYear} />}
          </div>
          <YearForm onSubmit={onSubmit} form={form} />
        </div>
        <img src="/icon.png" alt="My Image" className="absolute ml-5 h-56 w-72 object-contain" />
      </div>
    </>
  );
}

export default App;
