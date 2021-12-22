import React, { useEffect, useState } from "react";
import { countryData } from "../../api";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import styles from "./Bar.module.css";

function BarChart({ compareCountry: { confirmed, deaths } }) {
  const [picker, setPicker] = useState("");
  const [countryCases, setCountryCases] = useState([]);

  //   useEffect(() => {
  //     if (confirmed) {
  //       console.log(confirmed);
  //     }
  //     console.log(country);
  //   }, []);

  const labels = ["Cases", "Deaths"];

  //   const BarChar = confirmed ? (
  //     <Bar
  //       data={
  //         ({
  //           label: "Confirmed Cases",
  //           data: confirmed.value,
  //           backgroundColor: "rgba(255, 99, 132, 0.5)",
  //         },
  //         {
  //           label: "Confirmed Deaths",
  //           data: deaths.value,
  //           backgroundColor: "rgba(53, 162, 235, 0.5)",
  //         })
  //       }
  //     />
  //   ) : null;

  //   const barData = {
  //       if(confirmed){}
  //     labels,
  //     datasets: [
  //       {
  //         label: "Confirmed Cases",
  //         data: confirmed.value,
  //         backgroundColor: "rgba(255, 99, 132, 0.5)",
  //       },
  //       {
  //         label: "Confirmed Deaths",
  //         data: deaths.value,
  //         backgroundColor: "rgba(53, 162, 235, 0.5)",
  //       },
  //     ],
  //   };

  const barChar = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              //   "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in` },
      }}
    />
  ) : null;

  return (
    <div>
      <h1>Bar baby</h1>
      {confirmed ? <h1>{confirmed.value}</h1> : null}
      {deaths ? <h1>{deaths.value}</h1> : null}
      {/* {confirmed ? <Bar data={barData} /> : null} */}
      {/* <BarChar /> */}
      {barChar}
    </div>
  );
}

export default BarChart;
