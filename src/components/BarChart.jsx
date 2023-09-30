/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";


export const BarChart = ({ chartData }) => {
  return (
    <>
      <br/>
      <h4 className='text-center'>Bar Chart</h4>
      <div className="chart-container w-100 d-flex justify-content-center">
        <Bar className='w-75 h-75'
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Annual Cargo Volume by Ports"
              },
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
    </>  
  )
}