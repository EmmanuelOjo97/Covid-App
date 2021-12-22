import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const getData = async () => {
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(url);

    const covidInformation = {
      confirmed,
      deaths,
      lastUpdate,
    };
    return covidInformation;
  } catch (error) {
    console.log(error);
  }
};

export const chartData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
    // return data;
  } catch (error) {
    console.log(error);
  }
};
