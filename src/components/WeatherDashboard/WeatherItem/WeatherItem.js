import React from 'react'
import styles from './WeatherItem.module.css'
export default function WeatherItem({ active, day, weatherData, onChangeSelected }) {


    const onHandlerDays = (day) => {
        onChangeSelected(day);
    };
  
    return (
        <div
            className={active ? `${styles.weathercard} ${styles.weathercardactive}` :  `${styles.weathercard}` }
            onClick={() => onHandlerDays(day)} >

            <div className={styles.weathercardday}>{weatherData.weekday}</div>
            <div className={styles.weathercardicon}>
                <img width="30" src={weatherData.imgUrl} alt="" />
            </div>
            <div className={styles.weathercardtemp}>
                {weatherData.temperature} <span>°C</span>
            </div>
            <div>{weatherData.description}</div>
        </div>
    );
}
