import React,{useState} from 'react';
import axios from "axios";
import './App.css';
function App() {
   const [weather,setWeather] = useState("");
   var[cityname,setCityname]=useState("");
    const inputcity=(val)=>{
      setCityname(val.target.value);
      
    }
   const city=()=> {
    
     axios.get("https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=dee3cb359e9233cb1e33df87d6b216e3").then((response) => {
       setWeather(response.data);
       
     });
   };
   return (
      <>
      <div className='main'>
      
        <div className='location-outer'>
          <input className='location-inner' type='search' placeholder="Enter Location" aria-label="Enter Location" onChange={inputcity} ></input>
          <button type="submit" className='buttonsearch' onClick={city} >Search</button>
        </div>
       
      
      <div className='city'>{weather?.name}</div>
      <div >
         <div className='temperature'>{((weather?.main?.temp)- 273.15).toFixed(2)}°C</div>
         <div className='msg'>{weather?.weather?.[0]?.description}</div>

      </div>
      <div className='info'>
         <div className='info-inner'>
            <div>{((weather?.main?.feels_like)- 273.15).toFixed(2)}°C</div>
            <div>Feels Like</div>
         </div>
         <div className='info-inner'>
            <div>{weather?.main?.humidity}</div>
            <div>Humidity</div>
         </div>
         <div className='info-inner'>
            <div>{weather?.wind?.speed} MPH</div>
            <div>Wind Speed</div>
         </div>
      </div>
      </div>
      </>
   );
}
export default App;