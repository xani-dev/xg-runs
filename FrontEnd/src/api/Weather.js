const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

// Get Weather From AccuWeather
export const getCurrentWeather = async (id) => {
  const resourceURL = "/currentconditions/v1/";
  const weatherQuery = `${id}?apikey=${apiKey}`;

  const res = await fetch(resourceURL + weatherQuery);
  const weatherData = await res.json();
  return weatherData[0];
};
//  Get City Key
export const getCity = async (city) => {
  const resourceURL = "/locations/v1/cities/search";
  const cityQuery = `?apikey=${apiKey}&q=${city}`;

  const res = await fetch(resourceURL + cityQuery);
  const cityData = await res.json();
  return cityData[0];
};
