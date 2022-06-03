import React, { useState } from 'react';
import StyledWeek from './StyledWeek';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
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

    // <StyledWeek>
    //     <Swiper
    //         spaceBetween={20}
    //         slidesPerView={2}
    //         breakpoints={{
    //             // when window width is >= 640px
    //             640: {
    //                 width: 640,
    //                 slidesPerView: 4,
    //             },
    //             // when window width is >= 768px
    //             768: {
    //                 width: 768,
    //                 slidesPerView: 5,
    //             },
    //             // when window width is >= 991px
    //             991: {
    //                 width: 991,
    //                 slidesPerView: 6,
    //             },
    //             // when window width is >= 1024px
    //             1024: {
    //                 width: 1024,
    //                 slidesPerView: 6,
    //             },
    //         }}
    //     //onSlideChange={() => console.log('slide change')}
    //     //onSwiper={(swiper) => console.log(swiper)}
    //     >
    //         {data[selectedDayIndex] && data[selectedDayIndex].map((day, i) => <SwiperSlide key={i.toString()}><div className="box_info">
    //             <div>{day.time}</div>
    //             <img src={day.weatherIconUrl[0].value} alt={day.weatherDesc[0].value} />
    //             <div className="temp_info">
    //                 <span>{ day.tempC} </span>
    //                 <span> - </span>
    //                 <span className="light-text">{day.FeelsLikeC}°C</span>
    //             </div>
    //         </div></SwiperSlide>)}
    //     </Swiper></StyledWeek>
};
export default HourlyForecast;