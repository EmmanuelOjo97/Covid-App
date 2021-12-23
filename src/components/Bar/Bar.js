import React, { useEffect, useState } from "react";
import { countryData } from "../../api";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import styles from "./Bar.module.css";
import CountUp from "react-countup";

function BarChart({ compareCountry: { confirmed, deaths }, data, country }) {
  const [picker, setPicker] = useState("");
  const [countryCases, setCountryCases] = useState([]);

  useEffect(() => {
    console.log(data);
  }, []);

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
        labels: ["Infected"],
        datasets: [
          {
            label: ["Confirmed Cases"],
            backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(255, 0, 0, 0.5)"],
            data: [confirmed.value],
          },
          {
            label: ["Deaths Deaths"],
            backgroundColor: ["rgba(255, 0, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
            data: [deaths.value],
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
      {/* <h1>{country} </h1> */}
      {confirmed ? (
        <h1>
          Confirmed Coivd Cases in {country}:{" "}
          <CountUp
            end={confirmed.value}
            duration={1}
            start={confirmed.value / 2}
            separator=","
          />
        </h1>
      ) : null}
      {deaths ? (
        <h1>
          Confirmed Coivd Cases in {country}:{" "}
          <CountUp
            end={deaths.value}
            duration={1}
            start={deaths.value / 2}
            separator=","
          />
        </h1>
      ) : null}
      {confirmed ? (
        <h1>
          Proportion of Global Cases:{" "}
          {((confirmed.value / data.confirmed.value) * 100).toFixed(2)}%
        </h1>
      ) : null}
      {barChar}
    </div>
  );
}

export default BarChart;
