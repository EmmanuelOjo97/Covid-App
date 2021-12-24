import React, { useEffect, useState } from "react";
import { chartData } from "../../api";
import styles from "./Chart.module.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function ChartFunc() {
  const [dailyCovidData, setDailyCovidData] = useState([]);
  const [slicedData, setSlicedData] = useState([]);
  const [periodInput, setPeriodInput] = useState(379);

  useEffect(() => {
    const fetchData = async () => {
      setDailyCovidData(await chartData());
      setSlicedData(await chartData());
    };
    fetchData();
  }, []);

  const changePeriod = (time) => {
    setDailyCovidData(slicedData.slice(0, time));
    setPeriodInput(time);
  };

  const data = {
    labels: dailyCovidData.map((dates) => dates.date),
    datasets: [
      {
        label: "Confirmed Cases",
        id: 1,
        data: dailyCovidData.map((cases) => cases.confirmed),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Confirmed Deaths",
        id: 2,
        data: dailyCovidData.map((deaths) => deaths.deaths),
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Covid Cases from January 2020 to Feburary 2021{" "}
      </h1>
      <div className={styles.periodSelect}>
        <input
          type="number"
          min={10}
          max={379}
          value={periodInput}
          onChange={(e) => setPeriodInput(e.target.value)}
        />
        <button type="submit" onClick={() => changePeriod(periodInput)}>
          Change period
        </button>
      </div>

      <Line data={data} />
    </div>
  );
}

export default ChartFunc;
