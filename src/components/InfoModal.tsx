import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { CombinedDataShape } from '@/lib/types';
import { Info } from 'lucide-react';
import { useEffect, useState } from 'react';

interface InfoModalProps {
  year: number;
  combinedData: CombinedDataShape;
}

function InfoModal({ year, combinedData }: InfoModalProps) {
  const [region, setRegion] = useState('');
  const [crimeRate, setCrimeRate] = useState(0);

  useEffect(() => {
    const yearData = combinedData.find((data) => data.year == String(year));
    if (!yearData) {
      return null;
    }

    let minCrimeRate = Infinity;
    let minCrimeRegion = '';

    for (const region in yearData.data) {
      if (yearData.data[region] < minCrimeRate) {
        minCrimeRate = yearData.data[region];
        minCrimeRegion = region;
      }
    }

    setRegion(minCrimeRegion);
    setCrimeRate(minCrimeRate);
  }, [combinedData, year]);

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="outline" size="icon">
            <Info />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Región s najmenšou kriminalitou v roku {year}</DialogTitle>
            <DialogDescription>Údaje kriminality na daný rok.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-start gap-y-2">
            <p>Región: {region}</p>
            <p>Trestné činy na obyvateľov: {crimeRate}</p>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="button">Zatvoriť</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default InfoModal;
