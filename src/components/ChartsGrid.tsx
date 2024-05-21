import { regions } from '@/lib/api';
import { DataShape } from '@/lib/types';
import Chart from './Chart';

interface ChartsProps {
  data: DataShape;
  year: number;
}

function ChartsGrid({ data, year }: ChartsProps) {
  const charts = regions.map((region) => (
    <>
      <div className="flex flex-col items-center gap-y-3">
        <h1 className="mb-2 text-lg">{region} kraj</h1>
        <Chart data={data[region]} year={year} regionName={region} />
      </div>
    </>
  ));

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">{charts}</div>
    </>
  );
}

export default ChartsGrid;
