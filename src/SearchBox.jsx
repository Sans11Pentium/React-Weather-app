import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import { useState } from 'react';
import "./SearchBox.css";
import { ConfirmationNumberSharp } from '@mui/icons-material';

export default function SearchBox({updateInfo}){
    let[city,setcity]=useState("");
    let[error,setError]=useState(false);

    let API_URL="http://api.openweathermap.org/data/2.5/weather";
    let API_KEY="20d500ec06842c77f4c9fc3038b4a577";


    let getWeatherInfo=async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            // console.log(jsonResponse);
            let result={ 
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    };
    

    let handleChange=(event)=>{
        setcity(event.target.value);
    };
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setcity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
    };
    return(
        <div className='SearchBox'>
        {/* <h2>search for the weather</h2> */}
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} /><br /><br />
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color:"red"}}>no such place exists</p>}
        </form>
        </div>
    );
}