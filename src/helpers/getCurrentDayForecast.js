import moment from 'moment';

const getCurrentDayForecast = (data) => {
    
    const CurrentDate = data.current_condition[0];
    const currentWeather = data.weather[0]
    const { country, region, areaName } = data.nearest_area[0]
  
    return {
        weekday: moment(currentWeather.date).format('dddd'),
        date: CurrentDate.observation_time,
        location:areaName[0].value +" , "+region[0].value + " , " + country[0].value,
        temperature: CurrentDate.temp_C,
        weatherIcon: CurrentDate.weatherIconUrl[0].value,
        weatherDescription: CurrentDate.weatherDesc[0].value,
        feelsLike: CurrentDate.FeelsLikeC
    }
};

export default getCurrentDayForecast;
