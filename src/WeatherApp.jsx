import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Wonderland",
        feelslike:24.04,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>weather app</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}