import React, { useState, useEffect } from 'react'
import styles from './CitiesForecast.module.css';
import { setCity } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as countries from 'all-countries-and-cities-json';

const CitiesForecast = () => {
    const country = useSelector((state) => {return state.Reducer.country})

    const [AllCities, setCities] = useState([])


    const dispatch = useDispatch()
    const navigate = useNavigate();

    const dashboard = () => {
        navigate("/dashboard");
    };

    
    useEffect(() => {
       //get country cities from npm package for cities 
       const selectedCountry = countries[country] || []
        console.log("country name",country)
        setCities(selectedCountry)
    }, [country]);



    const handleSelectedCity = (e) => {
        if (e.target.value) {
            dispatch(setCity(e.target.value))
        }
    }

    return (
        <div>

            <div className={styles.heading}>
                explore weather of {country} cities
            </div>
            <div>
                <input type="text" id="txtAutoComplete" list="citiesList" className={styles.select} onChange={handleSelectedCity} />
                {AllCities.length > 0 && <datalist id="citiesList">
                    {
                        AllCities.map((city, y) =>
                            <option key={y} value={city}>{city}</option>)
                    }

                </datalist>}
            </div>
            <button type="submit" className={styles.button} onClick={dashboard}>Extended Forecast </button>
        </div>
    );
}

export default CitiesForecast;
