import React from 'react';
import TemperatureContainer from './Style';

// define types for the temperature info
interface Temperature{
    temperature: number;
    icon?: string;
    min: number;
    max: number;
    unit: string;
}

const TemperatureDisplay: React.FC<Temperature> = ({temperature, icon, max, min, unit}) => {
    
    return (
        <TemperatureContainer>
            <div>
                <p>{temperature}&#176;{unit && unit}</p> 
                <p>{`${min}`}&#176;{unit && unit} min/{`${max}`}&#176;{unit && unit} MAX</p>
            </div>
            <img alt="weather icon" src={`http://openweathermap.org/img/wn/${icon}.png`}/>
        </TemperatureContainer>
    )
}

export default TemperatureDisplay;