import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import { countryList } from "../../api";

function Dropdown({ handleCountryChange }) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountryList = async () => {
      setCountry(await countryList());
    };
    fetchCountryList();
  }, [setCountry]);

  return (
    <div>
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
