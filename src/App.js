import React, { Component } from "react";
import styles from "./App.module.css";
import { Card, Chart, Dropdown } from "./components";
import { getData, fetchCountryData } from "./api";
import Bar from "./components/Bar/Bar";

export default class App extends Component {
  state = {
    data: {},
    time: 0,
    country: "",
    compareCountry: {},
  };

  async componentDidMount() {
    const covidData = await getData();
    this.setState({ data: covidData, time: covidData.confirmed.value });
  }
  handleCountryChange = async (changeCountry) => {
    if (changeCountry === "Global") {
      const global = await getData();
      console.log(global);
    } else {
      const fetchData = await fetchCountryData(changeCountry);
      this.setState({ compareCountry: fetchData, country: changeCountry });
    }
  };

  render() {
    const { data, compareCountry, country } = this.state;
    return (
      <div className={styles.container}>
        <Card data={data} />
        <Dropdown handleCountryChange={this.handleCountryChange} />
        <div className={styles.barBaby}>
          <Bar compareCountry={compareCountry} />
        </div>
        <Chart />
      </div>
    );
  }
}
