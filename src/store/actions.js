export const SET_CURRENT_CITY_WEATHER = "SET_CURRENT_CITY_WEATHER";
export const SET_CURRENT_COUNTRY = "SET_CURRENT_COUNTRY";
export const SET_SELECTED_CITY = "SET_SELECTED_CITY";

export const SET_HOURLY_DAY_RATE = "SET_HOURLY_DAY_RATE";

export const setWeather = (data) => {
    return {
        type: SET_CURRENT_CITY_WEATHER,
        payload: data
    }
}


export const setCountry = (data) => {
    return {
        type: SET_CURRENT_COUNTRY,
        payload: data
    }
}


export const setCity = (data) => {
    return {
        type: SET_SELECTED_CITY,
        payload: data
    }
}


export const setHourlyRate = (data) => {
    return {
        type: SET_HOURLY_DAY_RATE,
        payload: data
    }
}