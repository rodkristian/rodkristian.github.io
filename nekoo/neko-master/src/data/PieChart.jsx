import React from 'react'
import Chart from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
    labels: labels,
    datasets: [
        {
            title: "Data",
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            data: [15, 10, 5, 3, 30, 35],
        },
    ],
};

function PieChart() {
  return (
    <div className='bg-white border'>
        <Pie data={data}></Pie>
    </div>
  )
}

export default PieChart