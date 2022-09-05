import axios from "axios";

const api_key = process.env.REACT_APP_WEATHER_API_KEY;

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country?.name?.common}&units=metric&appid=${api_key}`;

const getWeather = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

// eslint-disable-next-line
export default { getWeather };
