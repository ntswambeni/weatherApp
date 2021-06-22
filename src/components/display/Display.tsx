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
    unit:string;
}
const Display: React.FC<DisplayTypes> = ({date, temperature, icon, min, max, today, unit}) => {  
    return (
        <DisplayContainer>
            <TemperatureDisplay temperature={temperature} min={min} max={max} icon={icon} unit={unit && unit}/>
            <DateDisplay date={date} today={today}/>
        </DisplayContainer>
    )
}

export default Display;