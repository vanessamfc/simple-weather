import React, { useState } from "react";
import axios from "axios";

// import { Container } from './styles';

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const [country, setCountry] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [temp, setTemp] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [tempMin, setTempMin] = useState("");

  async function handleSubmit() {
    const {
      data: {
        main: { feels_like, temp, temp_max, temp_min },
        sys: { country },
        name,
      },
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9294b45a8bfba854cc201f95aef3c1af
    `);
    const celsiusTemp = (feels_like - 273.15).toFixed(1);
    setFeelsLike(celsiusTemp);
    setCity(name);
    setCountry(country);
    setTemp(temp);
    setTempMax(temp_max);
    setTempMin(temp_min);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          search
        </button>
      </div>
      <div>
        <h1>feels like:{feelsLike}</h1>
        <span>{city}</span>
        <span>{temp} </span>
      </div>
    </>
  );
};

export default Home;
