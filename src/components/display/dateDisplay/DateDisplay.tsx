import React from 'react';
import DateContainer from './Style';

//define types for day of the week and date of the month 
interface DateTypes{
    weekDay: string;
    monthDay: string;
}
const DateDisplay: React.FC<DateTypes> = ({weekDay, monthDay}) => {
    
    return (
        <DateContainer>
            <p>{weekDay}</p>
            <p>{monthDay}</p>
        </DateContainer>
    )
}

export default DateDisplay;