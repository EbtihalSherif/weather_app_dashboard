import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import useForecast from '../../hooks/useForecast'

import styles from './WeatherDasboard.module.css'
import Loader from '../Loader/Loader';
import Error from '../Error/Error'
import ChartWeather from '../ChartWeather/ChartWeather';
import CurrentDayForecast from '../CurrentDayForecast/CurrentDayForecast';
import UpcomingDays from '../UpcomingDaysForecast/UpcomingDays';
import HourlyForecast from '../Hourlydata/HourlyForecast';

export default function WeatherDashboard() {

  const { isError, isLoading, forecast, hourlyRate, data, getWeatherInfo } = useForecast();
  const [selected, setSelected] = useState(0);
  const cityName = useSelector((state) => state.Reducer)
  const [latLong, setLatLong] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      if (cityName.selectedCity) {
        await getWeatherInfo(cityName.selectedCity)
      }

      else {
        if (latLong == null) {
          navigator.geolocation.getCurrentPosition(function (position) {
            setLatLong(position.coords.latitude + ',' + position.coords.longitude);
          });
        }
        else await getWeatherInfo(latLong)

      }

    }
    fetchData(latLong);

  }, [cityName.selectedCity, latLong]);


  return (
    <React.Fragment>
      <Header />
      {!forecast && (
        <div className={styles.weathercontainer}>
          {isLoading && <Loader />}
          {isError && <Error />}
        </div>)}
      {forecast &&

        <div className={styles.weathercontainer}>
          <CurrentDayForecast {...forecast.currentDay} currentDayDetails={forecast.currentDayDetails} AllowDetailedView={true} />

          {forecast.upcomingDays && <div className={styles.weatherlistcard}>
            <UpcomingDays days={forecast.upcomingDays} selected={selected} setSelected={setSelected} />
          </div>}

          {hourlyRate &&
            <div>
              <ChartWeather selectedDayIndex={selected} dataDay={hourlyRate} />
            </div>}
          {hourlyRate &&
            <div>
              <HourlyForecast selectedDayIndex={selected} data={hourlyRate} />
            </div>}

        </div>
      }
    </React.Fragment>

  );
}
