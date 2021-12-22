import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import { countryList } from "../../api";
import Bar from "../Bar/Bar";

function Dropdown({ handleCountryChange }) {
  const [country, setCountry] = useState([]);
  const [countryChosen, setCountryChosen] = useState("");
  // const getter = async () => {
  //   const response = await countryList();
  //   // console.log(response);
  // };

  useEffect(() => {
    const fetchCountryList = async () => {
      setCountry(await countryList());
    };
    fetchCountryList();
  }, [setCountry]);

  return (
    <div>
      {/* <button onClick={() => getter()}>getter</button> */}
      <FormControl>
        <NativeSelect
          defaultValue="Global"
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="Global">Global</option>
          {country.map((countryName, index) => (
            <option key={index} value={countryName.name}>
              {countryName.name}
            </option>
          ))}
          ;
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default Dropdown;
