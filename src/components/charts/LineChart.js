import React , { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';



const LineChart = ({todayWeather, loading, fourDaysForecast}) => {

  const [chartInfo, setChartInfo] = useState({labels:[], data:[]});

  // init chart data
  const [lineData, setLineData] = useState({
    labels: chartInfo.labels,
    datasets: [
      {

        fill: false,
        lineTension: 1,
        backgroundColor: 'rgba(255, 23, 68,0.4)',
        borderColor: 'rgba(255, 23, 68,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255, 23, 68,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255, 23, 68,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartInfo.data
      }
    ]
  });

  useEffect(()=>{

    if(!loading){
      const labels = [];
      const data = [];
      labels.push(moment().format('MMM Do'));
      data.push(Math.round(todayWeather));
  
      for(var i = 0; i < fourDaysForecast.length; i++){
        labels.push(moment(fourDaysForecast[i].date).format('MMM Do'));
        data.push(Math.round(fourDaysForecast[i].temperature));
      }
      const infoBuilder = {labels:labels, data:data};
      setChartInfo(infoBuilder);
    }
      



    setLineData({labels: chartInfo.labels,
    datasets: [
      {

        fill: false,
        lineTension: 0.4,
        backgroundColor: 'rgba(255, 23, 68,0.4)',
        borderColor: 'rgba(255, 23, 68,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255, 23, 68,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255, 23, 68,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartInfo.data
      }
    ]})

    setLineOptions(
      {
        title: {
            display: false,
            text: "title",
            fontSize: 14
        },
        legend: {
            display: false,
            position: 'right'
        },
        maintainAspectRatio: false,
      }
    )    
  }, [todayWeather, loading, fourDaysForecast, chartInfo])
    
   

    
    // set options
    const [lineOptions, setLineOptions] = useState({

            title: {
                display: false,
                text: "title",
                fontSize: 14
            },
            legend: {
                display: false,
                position: 'right'
            },
            maintainAspectRatio: false,
        }
    );
    return (
        <div>
            <Line
            data={lineData}
            options={lineOptions} />
        </div>
    )
}

export default LineChart
