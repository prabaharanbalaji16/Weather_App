import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Weather from './components/Weather';

function App() {

  const api_key = "e0325d05c1289fc2633864a721bed2f1";

  const [city,setCity] = useState();
  const [state,setState] = useState();
  const [icon,setIcon] = useState();
  const [weather,setWeather] = useState();
  const [temp,setTemp] = useState();

  const [wind,setWind] = useState();
  const [pressure,setPressure] = useState();
  const [humidity,setHumidity] = useState();
  const [sunrise,setSunrise] = useState();
  const [sunset,setSunset] = useState();

  const getWeather=async(e)=>{
    e.preventDefault();

    setCity(undefined)
    setState(undefined);
    setIcon(undefined);
    setWeather(undefined);
    setTemp(undefined);
    setWind(undefined);
    setPressure(undefined);
    setHumidity(undefined);
    setSunrise(undefined);
    setSunset(undefined);
    
    var cityName = e.target.city.value;

    e.target.city.value="";
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`);

    const response = await api_call.json();
    setCity(response.name);
    setState(response.sys.country);
    setIcon(response.weather[0].icon);
    setWeather(response.weather[0].main);
    setTemp(response.main.temp);
    setWind(response.main.temp);
    setPressure(response.main.pressure);
    setHumidity(response.main.humidity);
    setSunrise(response.sys.sunrise);
    setSunset(response.sys.sunset);


    console.log(response);

  }
  return (
    <div className="App">
      <div className="app_form">
        <Form handler={getWeather}/>
      </div>
      
      <div className="weather">
        <Weather 
          city = {city}
          state ={state}
          icon = {icon}
          weather = {weather}
          temp = {temp}
          wind = {wind}
          pressure = {pressure}
          sunrise = {sunrise}
          sunset = {sunset}
          humidity ={humidity}
        />
      </div>
      
    </div>
  );
}

export default App;
