const Weather = ({ data }) => {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let today = new Date().toLocaleDateString('en-US', options);

  return (
    data &&
    Object.keys(data).length !== 0 &&
    Object.getPrototypeOf(data) === Object.prototype && (
      <div className='w-full max-w-xs flex flex-col bg-white rounded-lg border-2 border-gray-300 p-4'>
        <div id='city' className='font-bold text-xl'>
          {data.city}
        </div>
        <div id='date' className='text-sm text-gray-500'>
          {today}
        </div>
        <div className='mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24'>
          <img
            src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
            alt='weather-icon'
          />
        </div>
        <div className='flex flex-row items-center justify-center mt-6'>
          <div className='font-medium text-6xl'>{data.temperature}°</div>
          <div className='flex flex-col items-center ml-6'>
            <div>{data.weather}</div>
            <div className='mt-1'>
              <span className='text-sm'>
                <i className='far fa-long-arrow-up'></i>
              </span>
              <span className='text-sm font-light text-gray-500'>
                {data.max_temp}°C
              </span>
            </div>
            <div>
              <span className='text-sm'>
                <i className='far fa-long-arrow-down'></i>
              </span>
              <span className='text-sm font-light text-gray-500'>
                {data.min_temp}°C
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between mt-6'>
          <div className='flex flex-col items-center'>
            <div className='font-medium text-sm'>Wind</div>
            <div className='text-sm text-gray-500'>{data.wind}m/s</div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='font-medium text-sm'>Humidity</div>
            <div className='text-sm text-gray-500'>{data.humidity}%</div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='font-medium text-sm'>Visibility</div>
            <div className='text-sm text-gray-500'>{data.visibility}km</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Weather;
