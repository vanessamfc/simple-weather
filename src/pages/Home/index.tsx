import React, { useState } from "react";
import axios from "axios";

import { Container, StyledButton } from "./styles";

interface Weather {
  city: string;
  country: string;
  feelsLike: string;
  temp: string;
  tempMax: string;
  tempMin: string;
  wheatherDescription: string;
  main: string;
  icon: string;
}

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  // const [city, setCity] = useState();
  // const [country, setCountry] = useState("");
  // const [feelsLike, setFeelsLike] = useState("");
  // const [temp, setTemp] = useState("");
  // const [tempMax, setTempMax] = useState("");
  // const [tempMin, setTempMin] = useState("");
  // const [wheatherDescription, setWheatherDescription] = useState("");
  const [weather, setWeather] = useState<Weather | undefined>();

  async function handleSubmit() {
    const {
      data: {
        main: { feels_like, temp, temp_max, temp_min },
        sys: { country },
        weather: [{ main, description, icon }],
        name,
      },
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9294b45a8bfba854cc201f95aef3c1af
    `);

    const newDescription =
      description.charAt(0).toUpperCase() + description.slice(1);

    setWeather({
      city: name,
      country,
      feelsLike: feels_like,
      temp,
      tempMax: temp_max,
      tempMin: temp_min,
      wheatherDescription: newDescription,
      main,
      icon,
    });
  }

  return (
    <Container weather={weather?.main || "Clear"}>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <StyledButton
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          search
        </StyledButton>
      </div>
      <div>
        {weather ? (
          <div>
            <img src={weather.icon} alt="weather icon" />
            <h2>{weather.wheatherDescription}</h2>
            <p>{weather.temp}°C</p>
            <div>
              <span>
                {weather.tempMin}°C / {weather.tempMax}°C
              </span>

              <span>
                {weather.city}, {weather.country}
              </span>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};

export default Home;
