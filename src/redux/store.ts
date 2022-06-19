import { configureStore } from '@reduxjs/toolkit';
import camsReducer from './cams_slice';
import weatherReducer from './weather_slice';

const store = configureStore({
	reducer: {
		cams: camsReducer,
		weather: weatherReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
