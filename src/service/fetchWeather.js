import { OPEN_WEATHER_API_TOKEN, OPEN_WEATHER_API_URL } from "../common/config";

const fetchCityWeatherInfo = async (city) => {
  try {
    const rawResult = await fetch(
      `${OPEN_WEATHER_API_URL}?q=${city}&appid=${OPEN_WEATHER_API_TOKEN}`,
      {
        method: "get",
      }
    );
    const result = await rawResult.json();
    return {
      ...result,
      status: "fetchedData",
    };
  } catch (err) {
    return {
      message: err.message,
      status: "err",
    };
  }
};

export default fetchCityWeatherInfo;
