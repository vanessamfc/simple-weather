import React, { useState } from "react";
import axios from "axios";

import { Container, StyledButton } from "./styles";

interface Weather {
  city: string;
  country: string;
  feelsLike: number;
  temp: number;
  tempMax: number;
  tempMin: number;
  wheatherDescription: string;
  main: string;
  icon: string;
}

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<Weather | undefined>();
  const [erro, setErro] = useState("");
  async function handleSubmit() {
    try {
      setErro("");
      const {
        data: {
          main: { feels_like, temp, temp_max, temp_min },
          sys: { country },
          weather: [{ main, description, icon }],
          name,
        },
      } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9294b45a8bfba854cc201f95aef3c1af&lang=pt_br
      `);

      const newDescription =
        description.charAt(0).toUpperCase() + description.slice(1);

      setWeather({
        city: name,
        country,
        feelsLike: feels_like,
        temp: Math.round(temp),
        tempMax: Math.round(temp_max),
        tempMin: Math.round(temp_min),
        wheatherDescription: newDescription,
        main,
        icon,
      });
    } catch (error) {
      if (error.response.status === 404) {
        setErro(error.response.data.message);
      }
    }
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
        {erro ? (
          <p>{erro}</p>
        ) : (
          <>
            {" "}
            {weather ? (
              <div>
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
            )}{" "}
          </>
        )}
      </div>
    </Container>
  );
};

export default Home;
