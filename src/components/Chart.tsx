import { useEffect } from 'react';
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

const data = [
  {
    year: 2015,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2016,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2017,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2018,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2019,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2020,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2021,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2022,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2023,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2024,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2025,
    value: Math.floor(Math.random() * 5000) + 1000
  },
  {
    year: 2026,
    value: Math.floor(Math.random() * 5000) + 1000
  }
];

interface ChartProps {
  data: IData[];
}

function Chart({ data: propData }: ChartProps) {
  useEffect(() => {
    console.log(propData);
  }, [propData]);

  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <XAxis dataKey="year" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend />
          <Line dataKey="value" fill="currentColor" className="fill-primary" type="monotone" />
          <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Chart;
