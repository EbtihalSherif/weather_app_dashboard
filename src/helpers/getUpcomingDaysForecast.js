import moment from 'moment';

const getWeekday = date => moment(date).format('dddd').substring(0, 3);

const getUpcomingDaysForecast = data =>
 {  
     const {weather}=data
    return weather.map(day => ({
        imgUrl: day.hourly[0].weatherIconUrl[0].value,
        temperature: Math.round(day.maxtempC),
        weekday: getWeekday(day.date),
        description: day.hourly[0].weatherDesc[0].value,
        hourlyData: day.hourly.slice(1, day.hourly.length),
        date: day.date
    }))};

export default getUpcomingDaysForecast;
