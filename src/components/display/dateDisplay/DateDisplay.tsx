import React from 'react';
import DateContainer from './Style';
import moment from 'moment';

//define types for day of the week and date of the month 
interface DateTypes{
    date?: string;
    today?:string;
}
const DateDisplay: React.FC<DateTypes> = ({date, today=""}) => {
    // get day of the week from weather api date
    const getWeekDay = ()=>{
        const dayOfTheWeek = moment(date).format('dddd')
        return dayOfTheWeek;
    }

    const getMonthDay = ()=>{
        const dayOfThemonth = moment(date).format('MMM Do')
        
        return dayOfThemonth;
    }
    
    return (
        <DateContainer>
            <p>{getWeekDay()}</p>
            <p>{`${today}${getMonthDay()}`}</p>
        </DateContainer>
    )
}

export default DateDisplay;