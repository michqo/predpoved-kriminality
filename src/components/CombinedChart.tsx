import { CombinedDataShape } from '@/lib/types';
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

interface CombinedChartProps {
  data: CombinedDataShape;
  year: number;
}

function CombinedChart({ data, year }: CombinedChartProps) {
  const [adjustedData, setAdjustedData] = useState<CombinedDataShape>();

  useEffect(() => {
    setAdjustedData(data.filter((item) => parseInt(item.year) <= year));
  }, [data, year]);

  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={adjustedData}>
          <XAxis dataKey="year" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend />
          <Line
            dataKey="data.Banskobystrický"
            stroke='#991b1b'
            className="fill-red-800"
            type="monotone"
          />
          <Line
            dataKey="data.Bratislavský"
            stroke='#3b82f6'
            className="fill-blue-500"
            type="monotone"
          />
          <Line
            dataKey="data.Košický"
            stroke='#172554'
            className="fill-blue-900"
            type="monotone"
          />
          <Line
            dataKey="data.Nitriansky"
            stroke='#eab308'
            className="fill-yellow-500"
            type="monotone"
          />
          <Line
            dataKey="data.Prešovský"
            stroke='#991b1b'
            className="fill-red-800"
            type="monotone"
          />
          <Line
            dataKey="data.Trenčiansky"
            stroke='#0369a1'
            className="fill-sky-700"
            type="monotone"
          />
          <Line
            dataKey="data.Trnavský"
            stroke='#fbbf24'
            className="fill-amber-400"
            type="monotone"
          />
          <Line
            dataKey="data.Žilinský"
            stroke='#16a34a'
            className="fill-green-600"
            type="monotone"
          />
          <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default CombinedChart;
