import React, { useState, useEffect } from 'react'
import { Country, City } from 'country-state-city';
//import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from './CitiesForecast.module.css';
import { setCity } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
// import countries from '../../countries.json'
import * as countries from 'all-countries-and-cities-json';

const CitiesForecast = ({ country, currentCity }) => {
    const Weatherdata = useSelector((state) => state.Reducer)

    const [countryCode, setCountryCode] = useState(null);
    const [AllCities, setCities] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const dashboard = () => {
        navigate("/dashboard");
    };

    const search = (nameKey, myArray) => {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                return myArray[i];
            }
        }
    }


    useEffect(() => {
        const AllCountries = Country.getAllCountries()
        console.log(AllCountries)
        const selectedCountry = countries[country] || []
        console.log(selectedCountry)
        // search(country, AllCountries)
        setCountryCode(selectedCountry.isoCode)
        const cities = City.getCitiesOfCountry(selectedCountry.isoCode)
        setCities(selectedCountry)
    }, []);



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

                    <input type="text" id="txtAutoComplete" list="citiesList" className={styles.select} onChange={handleSelectedCity}  />
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
