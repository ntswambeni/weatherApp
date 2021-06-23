import React from 'react';
import DateContainer from './Style';
import moment from 'moment';

//Props expected on DateDisplay component 
interface DateTypes{
    date?: string;
    today?:string;
}

const DateDisplay: React.FC<DateTypes> = ({date, today=""}) => {
    // extract day of the week from a specific date ie. Monday
    const getWeekDay = ()=>{
        const dayOfTheWeek = moment(date).format('dddd')
        return dayOfTheWeek;
    }
    // extract day and month from a specific date ie. June 21st
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