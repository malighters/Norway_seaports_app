/* eslint-disable no-unused-vars */
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Additional } from './components/Additional';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainInfo } from './components/MainInfo';
import { data } from '../data.js';
import { BarChart } from './components/BarChart';

Chart.register(CategoryScale);

function App() {

  const [chartData, setChartData] = useState({
    labels: data.seaports.map((data) => data.name), 
    datasets: [
      {
        label: "Annual cargo volume ",
        data: data.seaports.map((data) => data.annualCargoVolume),
        backgroundColor: [
          'rgba(38, 207, 179, 0.6)',
          'rgba(200, 216, 23, 0.922)',
          'rgba(208, 77, 77, 0.6)',
          'rgba(97, 77, 208, 0.6)'
        ],
      }
    ]
  });

  return (
    <>
      <Header />
      <main>
        <MainInfo />
        <Additional seaports={data.seaports} />
        <BarChart chartData={chartData} />
     </main>
     <Footer />
    </>
  )
}

export default App;
