import React from 'react'
import LineChart from './LineChart';
import ChartContainer from './Style';

interface ForecastTypes{
  temperature: number;
  icon: string;
  date: string;
  min:number;
  max:number;
}

interface WeatherChartProps{
  fourDaysForecast:ForecastTypes[];
  todayWeather:number;
  loading:boolean;
}

const WeatherChart: React.FC<WeatherChartProps> = ({todayWeather, fourDaysForecast, loading}) => {

  return (
      <ChartContainer>
        <h2>Daily weather variation</h2>
        <LineChart  todayWeather={todayWeather} fourDaysForecast={fourDaysForecast} loading={loading}/>
      </ChartContainer>
  )
}

export default WeatherChart
