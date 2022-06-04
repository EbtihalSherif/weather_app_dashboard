import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import CurrentDayForecast from '../CurrentDayForecast/CurrentDayForecast';
import CitiesForecast from '../citiesForecast/CitiesForecast';
import styles from './WeatherMain.module.css'
import useForecast from '../../hooks/useForecast'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'
import { useDispatch} from 'react-redux';
import { setCountry } from '../../store/actions'

function WeatherMain() {
  const [latLong, setLatLong] = useState(null);

  const { isError, isLoading, forecast, data, getWeatherInfo } = useForecast();

  const dispatch=useDispatch()

  /**
   * fetch location data according to location 
   */
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatLong(position.coords.latitude + ',' + position.coords.longitude);
    });
    if (latLong != null) {

      await getWeatherInfo(latLong);

    }

  }

  /**
   * refetch weather data if location is changed
   */
  useEffect(() => {
    fetchData()
  }
    , [latLong]);



    /**
     * if country changed update country name 
     */
  useEffect(() => {
    console.log("daataa",data)
    data&&data.nearest_area&&
      dispatch(setCountry(data?.nearest_area[0].country[0].value));
  }
    , [data, dispatch]);


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
        <CitiesForecast />
      </div>

    </div>
  );
}

export default WeatherMain
