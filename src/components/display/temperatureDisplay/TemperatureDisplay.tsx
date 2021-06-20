import React from 'react';
import TemperatureContainer from './Style';

// define types for the temperature info
interface Temperature{
    temperature: number;
    icon?: string;
}

const TemperatureDisplay: React.FC<Temperature> = ({temperature, icon}) => {
    
    return (
        <TemperatureContainer>
            <p>
                {temperature}&#176;C
            </p>
            <div>{icon}</div>
        </TemperatureContainer>
    )
}

export default TemperatureDisplay;