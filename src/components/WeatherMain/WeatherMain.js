import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import CurrentDayForecast from '../CurrentDayForecast/CurrentDayForecast';
import CitiesForecast from '../citiesForecast/CitiesForecast';
import styles from './WeatherMain.module.css'
import useForecast from '../../hooks/useForecast'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'
import { useSelector ,useDispatch} from 'react-redux';
import { setCountry } from '../../store/actions'
function WeatherMain(props) {
  const [latLong, setLatLong] = useState(null);
  // const [data, setData] = useState(null);

  const Weatherdata = useSelector((state) => state.Reducer)

  const { isError, isLoading, forecast, data, getWeatherInfo } = useForecast();


  const dispatch=useDispatch()
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
