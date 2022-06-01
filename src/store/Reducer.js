import {SET_CURRENT_CITY_WEATHER,SET_CURRENT_COUNTRY,SET_SELECTED_CITY,SET_HOURLY_DAY_RATE} from './actions'


const initState = {
    county:null,
    selectedCity: "",
    weatherData:{},
    dayHourlyRate:[]
};


export default function Reducer(state = initState, action) {
    switch (action.type) {
        case SET_CURRENT_CITY_WEATHER:
            return {
                ...state,
                weatherData: action.payload,
            };
        case SET_HOURLY_DAY_RATE:
            return {
                ...state,
                dayHourlyRate: action.payload,
            };
        case SET_CURRENT_COUNTRY:
            return {
                ...state,
                country: action.payload,
            };
        case SET_SELECTED_CITY:
            return {
                ...state,
                selectedCity: action.payload,
            };
       
        default:
            return {
                ...state,
            };
    }
}
