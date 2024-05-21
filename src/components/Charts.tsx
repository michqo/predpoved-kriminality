import { regions } from '@/lib/api';
import { DataShape } from '@/lib/types';
import Chart from './Chart';

interface ChartsProps {
  data: DataShape;
  year: number;
}

function Charts({ data, year }: ChartsProps) {
  const charts = regions.map((region) => (
    <>
      <h1 className="mb-2 text-lg">{region} kraj</h1>
      <Chart data={data[region]} year={year} regionName={region} />
    </>
  ));

  return <>{charts}</>;
}

export default Charts;
