import { configureStore } from '@reduxjs/toolkit';
import camsReducer from './cams_slice';

const store = configureStore({
	reducer: {
		cams: camsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
