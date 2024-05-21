import { CombinedDataShape } from '@/lib/types';
import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface CombinedChartProps {
  data: CombinedDataShape;
  year: number;
}

function CombinedChart({ data, year }: CombinedChartProps) {
  const [adjustedData, setAdjustedData] = useState<CombinedDataShape>();

  useEffect(() => {
    setAdjustedData(data.filter((item) => item.year <= year));
  }, [data, year]);

  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={adjustedData}>
          <XAxis dataKey="year" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip />
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

export default CombinedChart;
