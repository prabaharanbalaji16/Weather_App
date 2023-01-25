import React from 'react';
import './Weather.css';
import oneD from '../openweathermap/01d.svg';
import oneN from '../openweathermap/01n.svg';
import twoD from '../openweathermap/02d.svg';
import twoN from '../openweathermap/02n.svg';
import threeD from '../openweathermap/03d.svg';
import threeN from '../openweathermap/03n.svg';
import fourD from '../openweathermap/04d.svg';
import fourN from '../openweathermap/04n.svg';
import nineD from '../openweathermap/09d.svg';
import nineN from '../openweathermap/09n.svg';
import tenD from '../openweathermap/10d.svg';
import tenN from '../openweathermap/10n.svg';
import elevenD from '../openweathermap/11d.svg';
import elevenN from '../openweathermap/11n.svg';
import thirteenD from '../openweathermap/13d.svg';
import thirteenN from '../openweathermap/13n.svg';
import fiftyD from '../openweathermap/50d.svg';
import fiftyN from '../openweathermap/50n.svg';


function Weather({city,icon,state,weather,temp,humidity,
                  pressure,sunrise,sunset,wind}) {
  return (
    <div className='weather'>
      {
        weather ?  
        <>
        <h1>{city},{state}</h1>
      <div className="weather_details">
          <div className="icon_and_temp">
            <div className="weather_icons">
              {
                icon==="01d" ? <img src={oneD} alt="" className='weather_icon'/> :""
              }
              {
                icon==="01n" ? <img src={oneN} alt="" className='weather_icon'/> :""
              }
              {
                icon==="02d" ? <img src={twoD} alt="" className='weather_icon'/> :""
              }
              {
                icon==="02n" ? <img src={twoN} alt="" className='weather_icon'/> :""
              }
              {
                icon==="03d" ? <img src={threeD} alt="" className='weather_icon'/> :""
              }
              {
                icon==="03n" ? <img src={threeN} alt="" className='weather_icon'/> :""
              }
              {
                icon==="04d" ? <img src={fourD} alt="" className='weather_icon'/> :""
              }
              {
                icon==="04n" ? <img src={fourN} alt="" className='weather_icon'/> :""
              }
              {
                icon==="09d" ? <img src={nineD} alt="" className='weather_icon'/> :""
              }
              {
                icon==="09n" ? <img src={nineN} alt="" className='weather_icon'/> :""
              }
              {
                icon==="10d" ? <img src={tenD} alt="" className='weather_icon'/> :""
              }
              {
                icon==="10n" ? <img src={tenN} alt="" className='weather_icon'/> :""
              }
              {
                icon==="11d" ? <img src={elevenD} alt="" className='weather_icon'/> :""
              }
              {
                icon==="11n" ? <img src={elevenN} alt="" className='weather_icon'/> :""
              }
              {
                icon==="13d" ? <img src={thirteenD} alt="" className='weather_icon'/> :""
              }
              {
                icon==="13n" ? <img src={thirteenN} alt="" className='weather_icon'/> :""
              }
              {
                icon==="50d" ? <img src={fiftyD} alt="" className='weather_icon'/> :""
              }
              {
                icon==="50n" ? <img src={fiftyN} alt="" className='weather_icon'/> :""
              }
              
            </div>
            <div className="weather_temp">
              <h1 className='weather_deg'>{temp}&deg; C</h1>
              <h1 className='weather_city'>{weather}</h1>
            </div>
          </div>
          <div className='weather_miscs'>
            <div className='span'>
              <span className='weather_prop'>Wind Speed</span>
              <span className='weather_val'>{wind}</span>
            </div> 

            <div className='span'>
              <span className='weather_prop'>Pressure</span>
              <span className='weather_val'>{pressure}</span>
            </div> 

            <div className='span'>
              <span className='weather_prop'>Humidity</span>
              <span className='weather_val'>{humidity}</span>
            </div> 

            <div className='span'>
              <span className='weather_prop'>Sunrise</span>
              <span className='weather_val'>{sunrise}</span>
            </div> 

            <div className='span'>
              <span className='weather_prop'>Sunset</span>
              <span className='weather_val'>{sunset}</span>
            </div> 
            
          </div>
      </div>
      </>
      : ""
      }
      
    </div>
  )
}

export default Weather