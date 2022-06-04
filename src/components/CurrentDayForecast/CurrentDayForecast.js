import React from 'react'
import styles from './CurrentDay.module.css';
import PropTypes from 'prop-types';
import locationIcon from './assets/location-pin.png';

/**
 * re usable component for detailed or simple forecast views 
 */
export default function CurrentDayForecast({ weekday, date, location, temperature, weatherIcon, weatherDescription, feelsLike, currentDayDetails, AllowDetailedView }) {


    const CurrentDay = (<div className={`${AllowDetailedView ? styles.weathermore : styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
        <div>
            <h2 className={`${AllowDetailedView ? styles.weatherWeekDay : "font-weight-bold"} mb-1`}>{weekday}</h2>
            <p className="mb-0">{date}</p>
            {!AllowDetailedView && <p className="d-flex align-items-baseline font-weight-lighter mb-1">
                <img width="10" height="15" src={locationIcon} className="mr-1" alt="location pin icon" />
                <span>{location}</span>
            </p>}
        </div>
        <div>
            <img width="45" src={weatherIcon} alt="" />
            <h2 className="font-weight-bold mb-1">
                <span>{temperature} °C</span>
            </h2>
            <p className="font-weight-bold mb-1">
                <span> Feels Like {feelsLike} °C</span>
            </p>
            <h5 className="font-weight-lighter">{weatherDescription}</h5>
        </div>
    </div>)



    return (
        <>

            {!AllowDetailedView &&

                <div className="d-flex">
                    {/* <div className={styles.gradient}></div> */}
                    {CurrentDay}
                </div>}

            {AllowDetailedView &&
                <div className={styles.weathermain}>
                    <div className={styles.weatherdata}>
                        {CurrentDay}
                        <div className={styles.weatherinfo}>
                            <div className={styles.weathercity}>
                                <span>{location}</span>
                            </div>
                            <ul className={styles.weatherlist}>
                                {currentDayDetails.map(({ name, value, unit }) =>
                                    <li className={styles.weatheritem}>
                                        {name}
                                        <span> {value}{unit}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div >}
        </>
    );
}
CurrentDayForecast.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired,
};