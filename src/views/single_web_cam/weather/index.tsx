import { useEffect, useState } from 'react';
import { fetchWeather } from '../../../api_calls/weather_api';
import './weather.scss';

export const WeatherInfo = ({ lat, long }: { lat: string; long: string }) => {
	const [weatherData, setWeatherData] = useState<any | undefined>(undefined);

	useEffect(() => {
		if (weatherData === undefined) {
			fetchWeather(lat, long, setWeatherData);
		}
	}, [weatherData, lat, long]);

	if (!weatherData) {
		return null;
	}

	console.log('weather: ', weatherData);

	return (
		<div className='weather-info'>
			<div>
				<h4>Temps</h4>
				<div className='temp'>
					<div className='temp-current'>{`Current Temp: ${Math.floor(weatherData.main.temp)}`}</div>
					<span className='temp-high'>{Math.floor(weatherData.main.temp_max)}</span>
					{'/'}
					<span className='temp-low'>{Math.floor(weatherData.main.temp_min)}</span>
				</div>
			</div>

			<div>
				<h4>{weatherData.weather[0].description}</h4>
				<img
					src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
					alt={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
				/>
			</div>
		</div>
	);
};
