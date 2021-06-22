import React , { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';



const LineChart = ({todayWeather, loading, fourDaysForecast}) => {
  // // chart info state
  // const [chartInfo, setChartInfo] = useState([]);

  // const buildChartInfo = ()=>{
  //   const infoBuilder = [];
  //   const chartItem = {}
  //   chartItem.date = moment().format('MMM Do');
  //   chartItem.temperature = todayWeather;
  //   infoBuilder.push(chartItem)
  //   for(var i = 0; i < fourDaysForecast.length; i++){
  //     const chartItem = {}
  //     chartItem.date = fourDaysForecast[i].date;
  //     chartItem.temperature = fourDaysForecast[i].temperature;
  //     infoBuilder.push(chartItem)
  //   }
  //   setChartInfo(infoBuilder);
  // }

  const [chartInfo, setChartInfo] = useState({labels:[], data:[]});

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
  }, [todayWeather, fourDaysForecast])
    
   

    // set data
    
    const [lineData, setLineData] = useState({
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
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
          data: [1,1,1,1]
        }
      ]
    });

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
