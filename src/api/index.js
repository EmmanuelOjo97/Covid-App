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
  } catch (error) {
    console.log(error);
  }
};

export const countryList = async () => {
  const {
    data: { countries },
  } = await axios.get(`${url}/countries`);

  const countryName = countries.map((name) => ({
    name: name.name,
  }));
  return countries;
};

export const fetchCountryData = async (country) => {
  if (country === "Afghanistan") {
    const {
      data: { confirmed, deaths },
    } = await axios.get(`${url}/countries/Afghanistan`);
    const countryInformation = {
      confirmed: confirmed,
      deaths: deaths,
    };
  }
  const {
    data: { confirmed, deaths },
  } = await axios.get(`${url}/countries/${country}`);
  const countryInformation = {
    confirmed: confirmed,
    deaths: deaths,
  };
  console.log(countryInformation);
  return countryInformation;
};
