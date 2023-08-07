import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'January', sales: 12 },
  { name: 'February', sales: 19 },
  { name: 'March', sales: 3 },
  { name: 'April', sales: 5 },
  { name: 'May', sales: 2 },
  { name: 'June', sales: 3 },
];

const LineChartComponent = () => {
  return (
    <div className="container mx-auto">
      <LineChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;