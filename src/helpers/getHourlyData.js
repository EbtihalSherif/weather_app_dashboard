
const getHourlyData = data => {
    const { weather } = data


     const hoursPerDay = []
    weather.map(day => (
        hoursPerDay.push(day.hourly.slice(1, day.hourly.length))
    ))

    return hoursPerDay
};

export default getHourlyData; 
