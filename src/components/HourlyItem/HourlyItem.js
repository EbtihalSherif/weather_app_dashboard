import React from "react";
import "./HourlyItem.css";



export const HourlyItem = ({  data, onClick }) => {
 

  const addHours=(numOfHours, date = new Date())=> {

    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

    return formatAMPM(date) ;
  }
  const formatAMPM=(date)=> {
    var hours = date.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + ':00 '  + ampm;
    return strTime;
  }

  return (
    <div className="hourly-item" onClick={onClick}>
      <img
        src={data.weatherIconUrl[0].value}
        className="icon-small"
        alt=""
      />
      <label className="hour">
        {addHours(data.time)}
      </label>
      <label className="description">{data.weatherDesc[0].value}</label>
      <label className="min-max">
        {data.tempC}°C
      </label>
    </div>
  );
};

export default HourlyItem;


