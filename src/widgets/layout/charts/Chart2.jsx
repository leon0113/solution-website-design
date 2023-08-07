import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'January', sales: 12, color: '#f50057' },
    { name: 'February', sales: 19, color: '#2962ff' },
    { name: 'March', sales: 3, color: '#00bfa5' },
    { name: 'April', sales: 5, color: '#ffab00' },
    { name: 'May', sales: 2, color: '#d500f9' },
    { name: 'June', sales: 3, color: '#64dd17' },
  ];
  
  const CustomBar = (props) => {
    const { x, y, width, height, color } = props;
    const borderRadius = 3
    ; // Set the desired border radius
  
    return (
      <g>
        <rect x={x} y={y} width={width / 2} height={height} fill={color} rx={borderRadius} />
        <rect x={x + width / 2} y={y} width={width / 2} height={height} fill={color} rx={borderRadius} />
      </g>
    );
  };
  const Chart2 = () => {
    return (
      <div className="chart-container">
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" barSize={10} label={{ position: 'top' }} radius={[10, 10, 0, 0]} shape={<CustomBar />} data={data} />
        </BarChart>
      </div>
    );
  };
  
  export default Chart2;
  ;
