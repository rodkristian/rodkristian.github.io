import React from 'react'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Data",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [15, 10, 5, 3, 30, 30, 35],
        },
    ],
};

function LineChart() {
  return (
    <div className='bg-white border border-secondary'>
        <Line data={data}></Line>
    </div>
  )
}

export default LineChart