import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';

import { HolidayVillage } from '@mui/icons-material';
export default function InfoBox({info}){
    let INIT_URL="https://images.unsplash.com/photo-1580049904360-a9c3b79f86ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    // let info = {
    //     city: "Delhi",
    //     feelslike:24.04,
    //     temp:25.05,
    //     tempMin:25.05,
    //     tempMax:25.05,
    //     humidity:47,
    //     weather:"haze",
    // };
    const HOT_URL="https://images.unsplash.com/photo-1466995937966-2e6f29c6ed60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1520609798519-2e1e8c18df3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJhaW58ZW58MHx8MHx8fDA%3D";
    const STORM_URL="https://plus.unsplash.com/premium_photo-1664304434345-8b8e6b512532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRodW5kZXJzdG9ybXxlbnwwfHwwfHx8MA%3D%3D";
    return(
        <div className="InfoBox">
            {/* <h1>Weather information</h1> */}
            <div className='cardcontainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
                title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp; &nbsp;{info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>
                        The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                    </p>
                </Typography>
                </CardContent>
                </Card>
                </div>
        </div>
    );
}