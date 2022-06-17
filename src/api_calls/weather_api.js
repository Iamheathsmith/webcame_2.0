
const apiPath = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '30eb640baaf1753792330e166b8ddf4f';

export const fetchWeather = (lat: string, lon: string, setWeatherData: (data)=> void) => {
	const url = `${apiPath}lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
	return fetch(url)
		.then((response) => response.json())
		.then(data => setWeatherData(data))
};
