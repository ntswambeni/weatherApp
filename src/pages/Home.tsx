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
import Footer from '../components/footer/Footer';
import PageContainer from './PageContainer';
import Loading from '../components/layouts/Loading';

const Home: React.FC = () => {
    const weatherContext = useContext(WeatherContext);
    const { todaysWeather, fourDaysForecast, getCurrentsWeather, getWeatherForecast, loading, unit, changeUnit} = weatherContext;
    
    return (
        <Fragment>
            <Navbar unit={unit} changeUnit={changeUnit} city={todaysWeather.city && todaysWeather.city}/>
                {loading && <Loading/>}
                <PageContainer>
                    <HomeMainContent>
                        <div>
                            {todaysWeather.city&&<CityName city={todaysWeather.city} country={todaysWeather.country}/>}
                            <SearchBar getTodayWeather={getCurrentsWeather} getForecast={getWeatherForecast} unit={unit}/>
                        </div>
                        <div>
                            {fourDaysForecast.length !==0 && <Display 
                                today={"TODAY - "}
                                temperature={todaysWeather.temperature && Math.round(todaysWeather.temperature) }
                                icon={todaysWeather.icon && todaysWeather.icon}
                                min={todaysWeather.min && Math.round(todaysWeather.min)}
                                max={todaysWeather.max && Math.round(todaysWeather.max)}
                                unit={unit.IS}
                            />}
                            {todaysWeather.city && <WeatherChart todayWeather={todaysWeather.temperature} fourDaysForecast={fourDaysForecast} loading={loading}/>}
                        </div>
                        
                        <Map lat={todaysWeather.lat} lng={todaysWeather.lng}/> 
                    </HomeMainContent>
                    {
                        fourDaysForecast.length !==0 &&
                            fourDaysForecast.map((weatherForecast:any, index:any)=>{ 
                            return (
                                <SpaceBelow key={index}>
                                    <Display 
                                        temperature={Math.round(weatherForecast.temperature && weatherForecast.temperature) }
                                        icon={weatherForecast.icon}
                                        date={weatherForecast.date}
                                        min={Math.round(weatherForecast.min)}
                                        max={Math.round(weatherForecast.max)}
                                        unit={unit.IS}
                                    />
                                </SpaceBelow>
                            )
                        })
                    }
                </PageContainer>
            <Footer/>
        </Fragment>
    )
}

export default Home
