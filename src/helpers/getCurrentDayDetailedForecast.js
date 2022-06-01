const currentDayForecast = data => [
    {
        name: 'chance of rain',
        value: data.weather[0].hourly[0].chanceofrain,
        unit: ' % ',
    },
    {
        name: 'chance of fog',
        value: data.weather[0].hourly[0].chanceoffog,
        unit: ' % ',
    },
    {
        name: 'cloud cover',
        value: data.current_condition[0].cloudcover,
        unit: ' Okta ',
    },
    {
        name: 'humidity',
        value: data.current_condition[0].humidity,
        unit: '%',
    },
   
    {
        name: 'UV Index',
        value: data.current_condition[0].uvIndex,
        unit: '',
    },
    {
        name: 'max temp',
        value: data.weather[0].maxtempC,
        unit: '°C',
    },
    {
        name: 'min temp',
        value: data.weather[0].mintempC,
        unit: '°C',
    },
];

export default currentDayForecast;
