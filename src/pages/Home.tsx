import React, { Fragment, useContext } from 'react'
import Navbar from '../components/navbar/Navbar';
import WeatherContext from "../context/weather/weatherContext";
import HomeMainContent from './Style';
import CityName from '../components/cityName/CityName';
import SearchBar from '../components/searchBar/SearchBar';
import Display from '../components/display/Display';
import WeatherChart from '../components/charts/WeatherChart';
import Map from '../components/map/Map';
import Footer from '../components/footer/Footer';
import PageContainer from './PageContainer';
import Loading from '../components/layouts/Loading';
import styled from 'styled-components';

const Home: React.FC = () => {
    const weatherContext = useContext(WeatherContext);
    const { todaysWeather, fourDaysForecast, getCurrentsWeather, getWeatherForecast, loading, unit, changeUnit} = weatherContext;

    /* responsiveness CSS */
    const FlexComponents = styled.div`
        @media only screen and (min-width:768px){
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
        }
    `;

    const ForecastSection = styled.div`
        @media only screen and (min-width:768px){
            display: flex;
            flex-flow: row wrap;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 1rem;
        }
    `;

    const CustomDisplay = styled(Display)`
        margin-bottom: 15px;
        @media only screen and (min-width:768px){
            margin-bottom: 50px;
            width: 45%;
            min-width: 45%;
            margin-right: 0;
        }
        @media only screen and (min-width:1024px){
            margin-bottom: 50px;
            width: 200px;
            min-width: 200px;
        }
    `;
    /*-- responsiveness CSS --*/
    
    return (
        <Fragment>
            <Navbar unit={unit} changeUnit={changeUnit} city={todaysWeather.city && todaysWeather.city}/>
                {loading && <Loading/>}
                <PageContainer>
                    <HomeMainContent>
                        <FlexComponents>
                            {todaysWeather.city&&<CityName city={todaysWeather.city} country={todaysWeather.country}/>}
                            <SearchBar getTodayWeather={getCurrentsWeather} getForecast={getWeatherForecast} unit={unit}/>
                        </FlexComponents>
                        <FlexComponents>
                            {fourDaysForecast.length !==0 && <Display 
                                today={"TODAY - "}
                                temperature={todaysWeather.temperature && Math.round(todaysWeather.temperature) }
                                icon={todaysWeather.icon && todaysWeather.icon}
                                min={todaysWeather.min && Math.round(todaysWeather.min)}
                                max={todaysWeather.max && Math.round(todaysWeather.max)}
                                unit={unit.IS}
                            />}
                            {todaysWeather.city && <WeatherChart todayWeather={todaysWeather.temperature} fourDaysForecast={fourDaysForecast} loading={loading}/>}
                        </FlexComponents>
                    </HomeMainContent>
                    <ForecastSection>
                        {
                            fourDaysForecast.length !==0 &&
                                fourDaysForecast.map((weatherForecast:any, index:any)=>{ 
                                return (
                                    <CustomDisplay key={index}
                                        temperature={Math.round(weatherForecast.temperature && weatherForecast.temperature) }
                                        icon={weatherForecast.icon}
                                        date={weatherForecast.date}
                                        min={Math.round(weatherForecast.min)}
                                        max={Math.round(weatherForecast.max)}
                                        unit={unit.IS}
                                    />
                                )
                            })
                        }
                    </ForecastSection>
                </PageContainer>
                <Map lat={todaysWeather.lat} lng={todaysWeather.lng}/> 
            <Footer/>
        </Fragment>
    )
}

export default Home
