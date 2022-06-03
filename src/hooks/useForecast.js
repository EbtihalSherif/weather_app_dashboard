import { useState, useEffect } from 'react';
import axios from 'axios';
import { Weather_APi_KEY, Wetaher_Api_URL } from '../constants/constants'

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';
import getHourlyData from '../helpers/getHourlyData';


const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);
    const [data, setData] = useState(null);
    const [hourlyRate, setHourly] = useState(null);



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



    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data);
        const currentDayDetails = getCurrentDayDetailedForecast(data);
        const upcomingDays = getUpcomingDaysForecast(data);
        const hourlyData=getHourlyData(data)
        setHourly(hourlyData)
        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);
    };

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

//     useEffect(()  => {
//     const regetData= async () =>{
//         if (!cityName.selectedCity) {
//             setLoading(true);
//             setError(false);

//             //default fetch...
//             const data =await fetchData();
//             if (!data) return;

//             gatherForecastData(data);
//     };
//         regetData()
// }
//     }, [cityName.selectedCity,latLong]);

    return {
        isError,
        isLoading,
        forecast,
        data,
        hourlyRate,
        getWeatherInfo,
    };
};

export default useForecast;
