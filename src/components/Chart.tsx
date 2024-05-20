import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { IRegion } from '../lib/types';

interface ChartProps {
  data: IRegion[];
  year: number;
  regionName: string;
}

function Chart({ data, year }: ChartProps) {
  const [transformedData, setTransformedData] = useState<IRegion[]>([]);

  useEffect(() => {
    setTransformedData(data.filter((item) => item.year <= year));
  }, [data, year]);

  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={transformedData}>
          <XAxis dataKey="year" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend />
          <Line
            dataKey="crime_per_citizen"
            fill="currentColor"
            className="fill-primary"
            type="monotone"
          />
          <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Chart;
