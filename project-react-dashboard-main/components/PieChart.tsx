// src/components/PieChart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface PieChartProps {
  totalMeta: number;
  totalGasto: number;
}

const PieChart: React.FC<PieChartProps> = ({ totalMeta, totalGasto }) => {
  const data = {
    labels: ['Meta', 'Gasto'],
    datasets: [
      {
        label: 'Total',
        data: [totalMeta, totalGasto],
        backgroundColor: ['rgba(255, 165, 0, 0.8)', 'rgba(255, 0, 0, 0.8)'],
        borderColor: ['rgba(255, 165, 0, 1)', 'rgba(255, 0, 0, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top', // Move the legend to the left
        align: 'start', // Align the legend to the top (left-top corner)
        labels: {
          boxWidth: 20, // Adjust the box size to make it square
          padding: 20, // Padding between legend and chart
        },
      },
    },
    maintainAspectRatio: false, // Disable aspect ratio to control the size
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
