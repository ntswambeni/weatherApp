import React, { Fragment, useContext } from 'react'
import Navbar from '../components/navbar/Navbar';
import WeatherContext from "../context/weather/weatherContext";
import HomeMainContent from './Style';
import CityName from '../components/cityName/CityName';
import SearchBar from '../components/searchBar/SearchBar';
import Display from '../components/display/Display';
import WeatherChart from '../components/charts/WeatherChart';
import Map from '../components/map/Map';
import SpaceBelow from '../components/display/SpaceBelow';

const Home: React.FC = () => {
    const weatherContext = useContext(WeatherContext);
    const { todaysWeather, fourDaysForecast, getCurrentsWeather, getWeatherForecast, loading, unit} = weatherContext;

    return (
        <Fragment>
            <Navbar/>
            <HomeMainContent>
                {todaysWeather.city&&<CityName city={todaysWeather.city} country={todaysWeather.country}/>}
                <SearchBar getTodayWeather={getCurrentsWeather} getForecast={getWeatherForecast} unit={unit}/>
                {fourDaysForecast.length !==0 && <Display 
                    today={"TODAY - "}
                    temperature={todaysWeather.temperature && Math.round(todaysWeather.temperature) }
                    icon={todaysWeather.icon && todaysWeather.icon}
                    min={todaysWeather.min && Math.round(todaysWeather.min)}
                    max={todaysWeather.max && Math.round(todaysWeather.max)}
                />}
                {todaysWeather.city && <WeatherChart todayWeather={todaysWeather.temperature} fourDaysForecast={fourDaysForecast} loading={loading}/>}
                <Map lat={todaysWeather.lat} lng={todaysWeather.lng}/> 
            </HomeMainContent>
            {
                fourDaysForecast.length !==0 &&
                    fourDaysForecast.map((weatherForecast:any, index:any)=>{ 
                    return (
                        <SpaceBelow>
                            <Display 
                                key={index}
                                temperature={Math.round(weatherForecast.temperature && weatherForecast.temperature) }
                                icon={weatherForecast.icon}
                                date={weatherForecast.date}
                                min={Math.round(weatherForecast.min)}
                                max={Math.round(weatherForecast.max)}
                            />
                        </SpaceBelow>
                    )
                })
            }
        </Fragment>
    )
}

export default Home
