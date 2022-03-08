import './Css/weather.css';
import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&APPID=be02a5f240343b81a3f156542c119854`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let time = d.toLocaleTimeString(1000);

    return ` ${date} ${month} ${year} ${time} `
  }

  return (
    <div className="weather_body">
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main className="main_body">
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Kolkata"
            onChange={e => setQuery(e.target.value)}
            value= {query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">Condition: {weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
    </div>
  );
}

export default App;