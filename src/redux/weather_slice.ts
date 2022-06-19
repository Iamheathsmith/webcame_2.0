import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface WeatherState {
	readonly weather?: { [id: string]: any };
}

export const initialState: WeatherState = {
	weather: undefined,
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setWeather: (state, action: PayloadAction<{ [id: string]: any }>) => {
			state.weather = { ...state.weather, ...action.payload };
		},
	},
});

export const { setWeather } = weatherSlice.actions;

export const getWeather = (state: RootState) => state.weather.weather;

export default weatherSlice.reducer;
