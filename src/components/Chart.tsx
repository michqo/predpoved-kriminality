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
import { IData } from '../lib/types';

interface ChartProps {
  data: IData[];
  year: number;
}

function Chart({ data, year }: ChartProps) {
  const [transformedData, setTransformedData] = useState<IData[]>([]);
  
  useEffect(() => {
    setTransformedData(data.filter(item => item.year <= year))
    // console.log(JSON.stringify(transformedData, null, 2));
  }, [data, year]);

  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={transformedData}>
          <XAxis dataKey="year" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend />
          <Line dataKey="crime_per_citizen" fill="currentColor" className="fill-primary" type="monotone" />
          <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Chart;
