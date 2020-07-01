import React, { useState } from "react";
import axios from "axios";

import { Container } from "./styles";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  const [country, setCountry] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [temp, setTemp] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [wheatherDescription, setWheatherDescription] = useState("");

  async function handleSubmit() {
    const {
      data: {
        main: { feels_like, temp, temp_max, temp_min },
        sys: { country },
        weather: [{ main, description }],
        name,
      },
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9294b45a8bfba854cc201f95aef3c1af
    `);

    setCity(name);
    setCountry(country);
    setTemp(temp);
    setTempMax(temp_max);
    setTempMin(temp_min);
    setWheatherDescription(description);
  }

  return (
    <Container>
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
        <h2>{wheatherDescription}</h2>
        {temp ? <p>{temp}°</p> : <p></p>}
        {tempMin && tempMax && (
          <span>
            {tempMin}° / {tempMax}°
          </span>
        )}
        <span>
          {city},{country}
        </span>
      </div>
    </Container>
  );
};

export default Home;
