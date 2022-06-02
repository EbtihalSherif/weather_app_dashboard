import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import CurrentDayForecast from '../CurrentDayForecast/CurrentDayForecast';
import CitiesForecast from '../citiesForecast/CitiesForecast';
import styles from './WeatherMain.module.css'
import useForecast from '../../hooks/useForecast'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'
import { useSelector } from 'react-redux';

function WeatherMain(props) {
  const [latLong, setLatLong] = useState(null);
  // const [data, setData] = useState(null);

  const Weatherdata = useSelector((state) => state.Reducer)

  const { isError, isLoading, forecast, data, getWeatherInfo } = useForecast();


  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatLong(position.coords.latitude + ',' + position.coords.longitude);
    });
    if (latLong != null) {

      await getWeatherInfo(latLong);

    }

  }

  useEffect(() => {
    fetchData()

  }
    , [latLong]);


  return (
    <div >
      <Header />
      <div className={styles.cont}>
        {!forecast && (
          <div className={styles.weathercontainer}>
            {isLoading && <Loader />}
            {isError && <Error />}
          </div>
        )}

        {forecast &&
          <div className={`${styles.box} position-relative`}>
            <CurrentDayForecast {...forecast.currentDay} AllowDetailedView={false} />
          </div>}
        {forecast && data && <CitiesForecast currentCity={Weatherdata.selectedCity} country={data.nearest_area[0].country[0].value} />}
      </div>

    </div>
  );
}

export default WeatherMain
