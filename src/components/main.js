import axios from 'axios';
import { useEffect, useState } from 'react';
import Map from './map';
import Search from './search';
import Weather from './weather';

const Main = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setLatitude(lat);
        setLongitude(lng);

        fetchData(lat, lng);
      });
    } else {
      const lat = 19.0;
      const lng = 72.8;

      setLatitude(lat);
      setLongitude(lng);

      fetchData(lat, lng);
    }
  }, []);

  const fetchData = (lat, lng) => {
    axios
      .get(process.env.REACT_APP_OPEN_WEATHER_API_URL, {
        params: {
          lat: lat,
          lon: lng,
          units: 'metric',
          appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const dataset = res.data;
          const data = {
            city: dataset?.name,
            temperature: dataset?.main?.temp,
            min_temp: dataset?.main?.temp_min,
            max_temp: dataset?.main?.temp_max,
            humidity: dataset?.main?.humidity,
            visibility: dataset?.visibility / 1000,
            weather: dataset?.weather[0]?.main,
            wind: dataset?.wind?.speed,
            icon: dataset?.weather[0]?.icon,
          };
          setWeatherData(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {latitude !== 0 && longitude !== 0 ? (
        <main className='h-screen p-8 bg-gray-900'>
          <section className='flex px-4 items-center text-white space-x-2'>
            <img src='/logo192.png' className='h-7 w-7' alt='weather-icon' />
            <p
              id='header'
              className='text-xl leading-8 font-extrabold tracking-wider text-gray-200'>
              WEATHERLY
            </p>
          </section>
          <div className='h-full flex px-4 overflow-hidden'>
            <div className='w-1/4 h-full flex flex-col justify-around'>
              <Search
                setWeatherData={setWeatherData}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
              />
              <Weather data={weatherData} />
            </div>
            <div className='w-3/4 h-full p-4'>
              <div className='relative w-full h-full bg-white rounded-lg border-2 border-gray-300 overflow-clip'>
                {<Map latitude={latitude} longitude={longitude} />}
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default Main;
