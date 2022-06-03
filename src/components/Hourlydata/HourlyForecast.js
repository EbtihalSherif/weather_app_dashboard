import React, { useState } from 'react';
import 'swiper/css';
import HourlyItem from '../HourlyItem/HourlyItem';
import HourlyItemDetails from '../HourlyItemDetails/HourlyItemDetails';
import './HourlyData.css'

const HourlyForecast = ({ data, selectedDayIndex }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const clickHandler = (idx) => {
        if (idx === activeIndex) {
            setActiveIndex(null);

        } else {
            setActiveIndex(idx);
        }
    };
    return (<div className="hourly">
        <label className="heading">Hourly Forecast</label>
        <div className="hourly-items-container">

            {data[selectedDayIndex].map((d, idx) => (
                <div key={idx}>
                    <HourlyItem
                        data={d}
                        selectedIndex={idx}
                        onClick={()=>clickHandler(idx)}
                    ></HourlyItem>
                    <div
                        className={
                            activeIndex === idx
                                ? "hourly-item-header active"
                                : "hourly-item-header"
                        }
                    >
                        <HourlyItemDetails selectedIndex={idx} data={d}></HourlyItemDetails>
                    </div>
                </div>
            ))}
        </div>
    </div>)

};
export default HourlyForecast;