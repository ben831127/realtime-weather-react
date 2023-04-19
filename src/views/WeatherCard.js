import React from "react";
import dayjs from "dayjs";
import classes from "./WeatherCard.module.scss";
import WeatherIcon from "./../components/WeatherIcon";
import { ReactComponent as AirFlowIcon } from "./../images/airFlow.svg";
import { ReactComponent as RainIcon } from "./../images/rain.svg";
import { ReactComponent as RefreshIcon } from "./../images/refresh.svg";
import { ReactComponent as LoadingIcon } from "./../images/loading.svg";

export default function WeatherCard(props) {
  const {
    observationTime,
    locationName,
    description,
    windSpeed,
    temperature,
    rainPossibility,
    comfortability,
    weatherCode,
    isLoading,
  } = props.weatherElement;

  return (
    <div className={classes.weathercard}>
      <div className={classes.location}>{locationName}</div>
      <div className={classes.description}>
        {description} {comfortability}
      </div>
      <div className={classes.currentweather}>
        <div className={classes.temperture}>
          {Math.round(temperature)}
          <div className={classes.celsius}>°C</div>
        </div>
        <WeatherIcon
          weatherCode={weatherCode}
          moment={props.moment}
        ></WeatherIcon>
      </div>
      <div className={classes.airFlow}>
        <AirFlowIcon></AirFlowIcon>
        {windSpeed}m/h
      </div>
      <div className={classes.rain}>
        <RainIcon></RainIcon>
        {rainPossibility}%
      </div>
      <div
        className={isLoading ? classes.refreshloading : classes.refresh}
        onClick={props.fetchData}
      >
        最後觀測時間:
        {new Intl.DateTimeFormat("zh-TW", {
          hour: "numeric",
          minute: "numeric",
        }).format(dayjs(observationTime))}{" "}
        {isLoading ? <LoadingIcon></LoadingIcon> : <RefreshIcon></RefreshIcon>}
      </div>
    </div>
  );
}
