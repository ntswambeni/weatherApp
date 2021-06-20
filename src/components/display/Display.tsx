import React from 'react';
import DisplayContainer from './Style';
import TemperatureDisplay from './temperatureDisplay/TemperatureDisplay';
import DateDisplay from './dateDisplay/DateDisplay';
//define types for display components 
interface DisplayTypes{
    weekDay: string;
    monthDay: string;
    temperature: number;
    icon?: string;
}
const Display: React.FC<DisplayTypes> = ({weekDay, monthDay, temperature, icon}) => {
    
    return (
        <DisplayContainer>
            <TemperatureDisplay temperature={temperature} icon={icon}/>
            <DateDisplay weekDay={weekDay} monthDay={monthDay}/>
        </DisplayContainer>
    )
}

export default Display;