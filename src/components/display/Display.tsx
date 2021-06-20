import React from 'react';
import DisplayContainer from './Style';
import TemperatureDisplay from './temperatureDisplay/TemperatureDisplay';
import DateDisplay from './dateDisplay/DateDisplay';
//define types for display components 
interface DisplayTypes{
    date?: string;
    temperature: number;
    icon?: string;
    min: number;
    max: number;
    today?:string;
}
const Display: React.FC<DisplayTypes> = ({date, temperature, icon, min, max, today}) => {
    
    return (
        <DisplayContainer>
            <TemperatureDisplay temperature={temperature} min={min} max={max} icon={icon}/>
            <DateDisplay date={date} today={today}/>
        </DisplayContainer>
    )
}

export default Display;