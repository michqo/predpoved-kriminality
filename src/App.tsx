import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import ChartsGrid from './components/ChartsGrid';
import CombinedChart from './components/CombinedChart';
import YearForm from './components/YearForm';
import { api, regions } from './lib/api';
import { FormSchema } from './lib/schemas';
import { CombinedDataShape, RegionsDataShape } from './lib/types';

function App() {
  const [selectedYear, setSelectedYear] = useState<number>(2022);
  const [regionsData, setRegionsData] = useState<RegionsDataShape>();
  const [combinedData, setCombinedData] = useState<CombinedDataShape>();

  useEffect(() => {
    async function fetchData() {
      const data = await Promise.all(
        regions.map(async (region) => {
          const response = await api().region(region);
          return { [region]: response };
        })
      );
      const tempRegionsData = data.reduce((acc, item) => {
        const [regionName, regionData] = Object.entries(item)[0];
        return { ...acc, [regionName]: regionData };
      }, {});

      const tempCombinedData = regions.reduce<Record<string, Record<string, number>>>(
        (acc, region) => {
          const tempRegion = tempRegionsData[region];
          tempRegion.forEach((item) => {
            const year = item.year;
            if (!acc[year]) {
              acc[year] = {};
            }
            acc[year][region] = item.crime_per_citizen;
          });
          return acc;
        },
        {}
      );
      const finalData = Object.keys(tempCombinedData).map((year) => ({
        year: year,
        data: tempCombinedData[year]
      }));

      setRegionsData(tempRegionsData);
      setCombinedData(finalData);
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
    setSelectedYear(data.year);
  }

  return (
    <>
      <div className="relative grid h-screen grid-flow-row grid-rows-3 justify-center">
        <div className="relative row-span-1 flex flex-col items-center bg-background text-foreground">
          <h1 className="mt-6 text-4xl font-extrabold text-slate-800">PREDPOVEĎ KRIMINALITY</h1>
          <img src="/icon.png" alt="My Image" className="h-56 w-72 object-contain" />
        </div>
        <div className="row-span-2 flex w-screen max-w-6xl flex-col items-center gap-y-5">
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Všeobecná kriminalita</AccordionTrigger>
              <AccordionContent>
                {combinedData && <CombinedChart data={combinedData} year={selectedYear} />}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Údaje z regiónov</AccordionTrigger>
              <AccordionContent>
                {regionsData && <ChartsGrid data={regionsData} year={selectedYear} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <YearForm onSubmit={onSubmit} form={form} />
        </div>
      </div>
    </>
  );
}

export default App;
