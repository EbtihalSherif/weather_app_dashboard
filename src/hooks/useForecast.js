import { useState } from 'react';
import axios from 'axios';
import { Weather_APi_KEY, Wetaher_Api_URL } from '../constants/constants'

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';
import getHourlyData from '../helpers/getHourlyData';


/**
 * custom hook for forecast data
 * @returns
 */

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);
    const [data, setData] = useState(null);
    const [hourlyRate, setHourly] = useState(null);


/**
 * fetch data from weather api 
 * @param {*} location 
 * @returns 
 */
    const fetchData = async (location = null) => {

        try{
       
        if ( location != null) {

            
            let { data } = await axios(Wetaher_Api_URL,
                {
                    params:
                    {
                        key: Weather_APi_KEY,
                        q: location ,
                        format: "json",
                        num_of_days: 5,
                        includelocation: "yes",
                        showlocaltime: "yes",
                        alerts: "yes",
                        fx24:"yes",
                        tp: 3,
                    }
                })
           
            
            if (data.error) {
                setError('Something went wrong');
                setLoading(false);

                return;
            }

            setData(data.data)
            console.log(data);
            return data.data;

        }}
        catch(e){
                console.log(e);
            setError('Something went wrong');
            setLoading(false);

        }
        return;


    }


    /**
     * construct weather data according to later use in different components
     * @param {*} data 
     */

    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data);
        const currentDayDetails = getCurrentDayDetailedForecast(data);
        const upcomingDays = getUpcomingDaysForecast(data);
        const hourlyData=getHourlyData(data)
        setHourly(hourlyData)
        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);
    };


    /**
     * main function for fetching and construction of data to be called from other componenst
     */

    const getWeatherInfo = async location => {
        setLoading(true);
        setError(false);


        const data = await fetchData(location);
        if (!data||data.error) {
            setLoading(false);
            setError('something went wrong');
            return};

        gatherForecastData(data);
    };

    return {
        isError,
        isLoading,
        forecast,
        data,
        hourlyRate,
        getWeatherInfo
    };
};

export default useForecast;
