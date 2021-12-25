import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import CountUp from "react-countup";

function BarChart({ compareCountry: { confirmed, deaths }, data, country }) {
  const countryBarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Cases And Deaths"],
        datasets: [
          {
            label: ["Confirmed Cases"],
            backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(255, 0, 0, 0.5)"],
            data: [confirmed.value],
          },
          {
            label: ["Confirmed Deaths"],
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
          Confirmed Coivd Deaths in {country}:{" "}
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
      {countryBarChart}
    </div>
  );
}

export default BarChart;
