import moment from 'moment';
function addHours(currentTime, h) {
    return currentTime + (h * 60 * 60 * 1000);
}

const getHourlyData = data => {
    const { weather, current_condition } = data

    // let currentTime = [(current_condition[0].observation_time).split(' ')][1]
    // let [hrs, mins] = currentTime.split(':')
     const hoursPerDay = []

    // weather.map((days) => 
    //     days.hourly.map((day,idx) => 
    //         day.time = idx
    //     )

    // )

    weather.map(day => (
        hoursPerDay.push(day.hourly.slice(1, day.hourly.length))
    ))

    return hoursPerDay
};

export default getHourlyData; 
