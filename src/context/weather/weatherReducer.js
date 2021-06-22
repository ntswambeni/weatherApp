import {
  GET_CURRENT_WEATHER_BY_CITY_NAME,
  GET_WHEATHER_FORECAST_FOR_FOUR_DAYS,
  SET_LOADING,
  SET_OFF_LOADING
} from "../types";

const WeatherReducer = (state, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_BY_CITY_NAME:
      return {
        ...state,
        todaysWeather: action.payload,
        loading: false
      };  
    case GET_WHEATHER_FORECAST_FOR_FOUR_DAYS:
      return {
        ...state,
        fourDaysForecast: action.payload,
        loading: false
      };  
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_OFF_LOADING:
      return {
        ...state,
        loading: false,
      };  
    default:
      return state;
  }
};

export default WeatherReducer;