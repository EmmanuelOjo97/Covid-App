import React, { Component } from "react";
import styles from "./App.module.css";
import { Card, Chart, Dropdown } from "./components";
import { getData } from "./api";

export default class App extends Component {
  state = {
    data: {},
    time: 0,
  };

  async componentDidMount() {
    const covidData = await getData();
    this.setState({ data: covidData, time: covidData.confirmed.value });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Card data={data} />
        {/* <Dropdown /> */}
        <Chart />
      </div>
    );
  }
}
