import React from "react";
import "./HourlyItemDetails.css";


export const HourlyItemDetails = ({ data }) => {
  return (
    <div className="hourly-item-details">
      <div className="hourly-details-grid">
        <div className="hourly-details-grid-item">
          <label>Rain:</label>
          <label>{data.chanceofrain}%</label>
        </div>
        <div className="hourly-details-grid-item">
          <label>Pressure:</label>
          <label>{data.pressure}hPa</label>
        </div>
        <div className="hourly-details-grid-item">
          <label>Humidity:</label>
          <label>{data.humidity}%</label>
        </div>
        <div className="hourly-details-grid-item">
          <label>Clouds:</label>
          <label>{data.cloudcover}%</label>
        </div>
        <div className="hourly-details-grid-item">
          <label>Wind speed:</label>
          <label>{data.WindGustKmph} m/s</label>
        </div>
        <div className="hourly-details-grid-item">
          <label>UV Index:</label>
          <label>{data.uvIndex}</label>
        </div>
        
      </div>
    </div>
  );
};

export default HourlyItemDetails;
