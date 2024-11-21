import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import Weatherinformation from './components/WeatherInformation/Weatherinformation'
import WeatherInformation5Dyas from './components/WeatherInformation5Dyas/WeatherInformation5Dyas'


function App() {
  const [weather, setWeather] = useState()
  const [weather5Dyas, setWeather5Dyas] = useState()
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value 
    const key = "2fd0c143f8b9815576fb824e20a6840d"

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5days)

    setWeather(apiInfo.data)
    setWeather5Dyas(apiInfo5Days.data)
   
  }

  return (
    <div className='container'>
        <h1>WeatherApp</h1>
        <input ref={inputRef} type='text' placeholder='Digite o nome da Cidade' />
        <button onClick={searchCity}>Buscar</button>


        {weather && <Weatherinformation weather={weather}/>}
        {weather5Dyas && <WeatherInformation5Dyas weather5Dyas={weather5Dyas}/>}

    </div>
  )
}

export default App
