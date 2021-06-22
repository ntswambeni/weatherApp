import React, { useReducer } from "react";
import axios from "axios";
import WeatherContext from "./weatherContext";
import weatherReducer from "./weatherReducer";
import {
  GET_CURRENT_WEATHER_BY_CITY_NAME,
  GET_WHEATHER_FORECAST_FOR_FOUR_DAYS,
  SET_LOADING,
  SET_OFF_LOADING
} from "../types";

const WeatherState = (props) => {

  const initialState = { todaysWeather: {}, fourDaysForecast: [], loading: false, unit:{name:"metric", IS:"C"} };
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const weatherMap = {
    key: "590114bd84db624b1f28ce90d5fd1a06",
    currentWeather: "https://api.openweathermap.org/data/2.5/weather",
    forecast:"https://api.openweathermap.org/data/2.5/forecast"
  }

  // get current weather from wheathermap api and dispach the results to the reducer
  const getCurrentsWeather = async (unit="", city) => {
    try {
      setLoading();
      const res = await axios.get(`${weatherMap.currentWeather}?q=${city}&appid=${weatherMap.key}&units=${unit}`);
      const payload = {
        temperature: res.data.main.temp,
        icon: res.data.weather[0].icon, 
        city: res.data.name, 
        country: res.data.sys.country,
        min: res.data.main.temp_min,
        max: res.data.main.temp_max,
        lat:res.data.coord.lat,
        lng:res.data.coord.lon
      };
      dispatch({
        type: GET_CURRENT_WEATHER_BY_CITY_NAME,
        payload: payload,
      });
    } catch (err) {
      console.log(err);
      setOffLoading();
    }
  };


  // get weather forecast for four days from wheathermap api and dispach the results to the reducer
  const getWeatherForecast = async (unit="", city) => {
    try {
      setLoading();
      const res = await axios.get(`${weatherMap.forecast}?q=${city}&appid=${weatherMap.key}&units=${unit}`);
      const payload = [];
      for(var i = 1; i <= 4; i++){
        const forecast  = {
          temperature: res.data.list[i*8].main.temp,
          min:res.data.list[i*8].main.temp_min,
          max:res.data.list[i*8].main.temp_max,
          icon: res.data.list[i*8].weather[0].icon,
          date: res.data.list[i*8].dt_txt,
        }
        payload.push(forecast)
      } 
      dispatch({
        type: GET_WHEATHER_FORECAST_FOR_FOUR_DAYS,
        payload: payload,
      });
    } catch (err) {
      console.log(err);
      setOffLoading();
    }
  };


  const setLoading = () => dispatch({ type: SET_LOADING });

  const setOffLoading = () => dispatch({ type: SET_OFF_LOADING });

  return (
    <WeatherContext.Provider
      value={{
        todaysWeather: state.todaysWeather,
        loading: state.loading,
        fourDaysForecast: state.fourDaysForecast,
        unit: state.unit,
        setLoading,
        setOffLoading,
        getCurrentsWeather,
        getWeatherForecast
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
