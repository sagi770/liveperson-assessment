import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Country } from '../interfaces';

interface Props {
  setCountryList: React.Dispatch<React.SetStateAction<Country[]>>;
}

export const Search = ({ setCountryList }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [helperText, setHelperText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if(searchTerm === "")return;

    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
      .then(res => {
        setError(false);
        setHelperText("");
        setCountryList(res.data);
      })
      .catch(err => {
        console.log(err);
        setError(true);
        setHelperText("Country not found please try again.");
        setCountryList([])
      });

  }, [searchTerm,setCountryList]);

  return (
    <TextField
      id="outlined-full-width"
      label="Country Name"
      style={{ margin: 8 }}
      placeholder="Please Type Country Name"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      value={searchTerm}
      variant="outlined"
      onChange={handleChange}
      error={error}
      helperText={helperText}

    />
  )
}