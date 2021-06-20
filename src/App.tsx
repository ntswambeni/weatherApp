import React, { Fragment, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './util/GlobalStyle';
import theme from './util/theme';
import SearchBar from './components/searchBar/SearchBar';
import Display from './components/display/Display';
import axios from 'axios';
import WeatherChart from './components/charts/WeatherChart';

function App() {
  
  //Types for the forecast object 
  interface ForecastTypes{
    temperature: number;
    icon: string;
    date: string;
    min:number;
    max:number;
  }

  // loading state
  const [loading, setLoading] = useState(false);
 
  const [fourDaysForecast, setFourDaysForeCast] = useState<ForecastTypes[]>([]);;

  // controled variable for selection of weather unit
  const [unit, setUnit] = useState({name:"metric", IS:"C"})

  // controled variable for todays weather details
  const [todayWeatherState, setTodayWeatherState] = useState({temperature:0, icon:"", city: "", country:"", min: 0, max: 0});

  // Weather map api user details
  const weatherMap = {
    key: "590114bd84db624b1f28ce90d5fd1a06",
    todayWeather: "https://api.openweathermap.org/data/2.5/weather",
    forecast:"https://api.openweathermap.org/data/2.5/forecast"
  }

  // get todays weather details for a city
  const  getTodayWeather = async (city:string)=>{
    
    try{
      setLoading(true);
      const res = await axios.get(`${weatherMap.todayWeather}?q=${city}&appid=${weatherMap.key}&units=${unit.name}`);         
      setTodayWeatherState({
        temperature: res.data.main.temp,
        icon: res.data.weather[0].icon, 
        city: res.data.name, 
        country: res.data.sys.country,
        min: res.data.main.temp_min,
        max: res.data.main.temp_max
      });  
      setLoading(false)
    }catch(err){
      console.log(err);
    }
  }

  // get 5 days weather forecast for a city
  const  getForecast = async (city:string)=>{

    try{
      setLoading(true);
      const forecastStore: Array<ForecastTypes> = []
      const res = await axios.get(`${weatherMap.forecast}?q=${city}&appid=${weatherMap.key}&units=${unit.name}`);
      console.log(res.data);
      
      for(var i = 1; i <= 4; i++){
        const forecast  = {
          temperature: res.data.list[i*8].main.temp,
          min:res.data.list[i*8].main.temp_min,
          max:res.data.list[i*8].main.temp_max,
          icon: res.data.list[i*8].weather[0].icon,
          date: res.data.list[i*8].dt_txt,
        }
        forecastStore.push(forecast)
      } 
      setFourDaysForeCast(forecastStore)
      setLoading(false)
    }catch(err){
      console.log(err);
    }
  }

  
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar/>
        <SearchBar getTodayWeather={getTodayWeather} getForecast={getForecast}/>
        {fourDaysForecast.length !==0 && <Display 
          today={"TODAY - "}
          temperature={todayWeatherState.temperature && Math.round(todayWeatherState.temperature) }
          icon={todayWeatherState.icon && todayWeatherState.icon}
          min={todayWeatherState.min && Math.round(todayWeatherState.min)}
          max={todayWeatherState.max && Math.round(todayWeatherState.max)}
         />}
        <WeatherChart todayWeather={todayWeatherState.temperature} fourDaysForecast={fourDaysForecast} loading={loading}/>

         {/* {
          fourDaysForecast.length !==0 &&
            fourDaysForecast.map((weatherForecast, index)=>{ 
              return (
                <Display 
                  key={index}
                  temperature={Math.round(weatherForecast.temperature && weatherForecast.temperature) }
                  icon={weatherForecast.icon}
                  date={weatherForecast.date}
                  min={Math.round(weatherForecast.min)}
                  max={Math.round(weatherForecast.max)}
                />
              )
            })
        }  */}
        
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
