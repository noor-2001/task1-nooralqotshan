//نور هشام محمود القطشان 120190581
// Axios is a popular JavaScript library used for making HTTP requests from web browsers.
// It provides API for performing asynchronous operations and handling HTTP requests and responses.
import axios from 'axios';
const API_KEY = '4f0dd3916567a18dfe1d717249c24059'; // generated from openweathermap website

export const fetchLocationId = async city => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
  );
  const data = response.data;
  const locationId = data.id;
  return locationId;
};

export const fetchWeather = async locationId => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?id=${locationId}&appid=${API_KEY}`,
  );
  const data = response.data;
  const weather = data.weather[0].main;
  const temperature = data.main.temp;
  return {weather, temperature};
};
