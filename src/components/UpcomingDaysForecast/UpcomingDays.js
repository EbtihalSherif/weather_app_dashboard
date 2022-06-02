import React from 'react'
import WeatherItem from '../WeatherItem/WeatherItem'

export default function UpcomingDays({days,selected,setSelected}) {
  return (
      <>
      {days.map((item, index) => (
          <WeatherItem
              key={index}
              day={index}
              weatherData={item}
              active={selected === index}
              onChangeSelected={setSelected}
          />
          ))}</>
  )
}
