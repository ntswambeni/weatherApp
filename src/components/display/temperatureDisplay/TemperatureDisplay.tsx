import React from 'react';
import TemperatureContainer from './Style';

// define types for the temperature info
interface Temperature{
    temperature: number;
    icon?: string;
    min: number;
    max: number;
}

const TemperatureDisplay: React.FC<Temperature> = ({temperature, icon, max, min}) => {
    
    return (
        <TemperatureContainer>
            <div>
                <p>{temperature}&#176;C</p> 
                <p>{`${min}`}&#176;C min/{`${max}`}&#176;C MAX</p>
            </div>
            <img alt="weather icon" src={`http://openweathermap.org/img/wn/${icon}.png`}/>
        </TemperatureContainer>
    )
}

export default TemperatureDisplay;