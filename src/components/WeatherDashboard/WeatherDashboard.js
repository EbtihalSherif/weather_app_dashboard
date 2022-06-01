import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Header/Header';
import { useEffect, useState, useRef } from 'react';
import useForecast from '../../hooks/useForecast'
import { Container, Row, Col } from 'react-bootstrap';
import { setWeather, setHourlyRate, setCity } from '../../store/actions'

import styles from './WeatherDasboard.module.css'
import WeatherItem from './WeatherItem/WeatherItem'
import Loader from '../Loader/Loader';
import Error from '../Error/Error'
import ChartWeather from '../ChartWeather/ChartWeather';
import CurrentDayForecast from '../CurrentDayForecast/CurrentDayForecast';
export default function WeatherDashboard() {

  const { isError, isLoading, forecast, hourlyRate, data, getWeatherInfo } = useForecast();
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch()
  const cityName = useSelector((state) => state.Reducer)
 
  useEffect(() => {

    const fetchData = async () => {
      if (cityName.selectedCity) {
        await getWeatherInfo(cityName.selectedCity)
        // dispatch(setHourlyRate(hourlyRate))
      }

      else {
        navigator.geolocation.getCurrentPosition(function (position) {
          return position.coords.latitude + ',' + position.coords.longitude;
        });
      }


      // if (hourlyRate) {
      //   dispatch(setHourlyRate(hourlyRate))
      // }
    }
    fetchData();
    
  }, []);


  return (
    <React.Fragment>
      <Header />
      {isLoading && <Loader />}
      {isError && <Error />}
      {forecast &&

        <div className={styles.weathercontainer}>
              <CurrentDayForecast {...forecast.currentDay} currentDayDetails={forecast.currentDayDetails} AllowDetailedView={true}/>

          <div className={styles.weatherlistcard}>
            {forecast.upcomingDays?.map((item, index) => (
              <WeatherItem
                key={index}
                day={index}
                weatherData={item}
                active={selected === index}
                onChangeSelected={setSelected}
              />
            ))}

          </div>

          {hourlyRate &&
          <div>
             <ChartWeather selectedDayIndex={selected} dataDay={hourlyRate} />
            </div>}

          
        </div>
      }
    </React.Fragment>

  );
}
