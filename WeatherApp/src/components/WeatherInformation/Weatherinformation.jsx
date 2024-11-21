
import './WeatherInformation.css';

function Weatherinformation({ weather }) {




    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                <p className='temperatura'>{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className='descrição'>{weather.weather[0].description}</p>

            <div className='detalhes'>
                <p>Sensação Térmica:{Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade:{weather.main.humidity}%</p>
                <p>Pressão:{weather.main.pressure}</p>
            </div>

        </div>


    )



} export default Weatherinformation