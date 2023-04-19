import { useState, useEffect, useCallback } from "react";
import classes from "./App.module.scss";
import WeatherCard from "./views/WeatherCard";
import { getMoment } from "./utils/helpers";
import useWeatherAPI from "./hooks/useWeatherAPI";

const AUTH_KEY = "CWB-693404FB-8551-44A8-88D0-BAE311B16B81";
const LOCATION = "臺北";
const LOCATION_FORECAST = "臺北市";

function App() {
  const [weatherElement, fetchData] = useWeatherAPI({
    authorizationKey: AUTH_KEY,
    locationName: LOCATION,
    cityName: LOCATION_FORECAST,
  });
  const moment = getMoment(LOCATION_FORECAST);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={classes.container}>
      <WeatherCard
        weatherElement={weatherElement}
        moment={moment}
        fetchData={fetchData}
      ></WeatherCard>
    </div>
  );
}

export default App;
