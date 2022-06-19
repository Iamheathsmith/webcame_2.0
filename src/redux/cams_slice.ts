import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WebCam } from '../types/web_cam_type';
import { RootState } from './store';

export interface IndexedCameras {
	[id: string]: WebCam;
}

export interface CamsState {
	readonly allCams?: IndexedCameras;
	readonly homeCams?: IndexedCameras;
	readonly coastCams?: IndexedCameras;
	readonly mountainCams?: IndexedCameras;
	readonly inlandCams?: IndexedCameras;
}

export const initialState: CamsState = {
	allCams: undefined,
	homeCams: undefined,
	coastCams: undefined,
	mountainCams: undefined,
	inlandCams: undefined,
};

const camsSlice = createSlice({
	name: 'cams',
	initialState,
	reducers: {
		setAllCams: (state, action: PayloadAction<IndexedCameras>) => {
			state.allCams = action.payload;
		},
		setHomeCams: (state, action: PayloadAction<IndexedCameras>) => {
			state.homeCams = action.payload;
		},
		setCoastCams: (state, action: PayloadAction<IndexedCameras>) => {
			state.coastCams = action.payload;
			const allCamsState = state.allCams;
			state.allCams = { ...allCamsState, ...action.payload };
		},
		setMoutainCams: (state, action: PayloadAction<IndexedCameras>) => {
			state.mountainCams = action.payload;
			const allCamsState = state.allCams;
			state.allCams = { ...allCamsState, ...action.payload };
		},
		setInlandCams: (state, action: PayloadAction<IndexedCameras>) => {
			state.inlandCams = action.payload;
			const allCamsState = state.allCams;
			state.allCams = { ...allCamsState, ...action.payload };
		},
	},
});

export const { setAllCams, setCoastCams, setMoutainCams, setInlandCams, setHomeCams } = camsSlice.actions;

export const getAllCams = (state: RootState) => state.cams.allCams;
export const getHomeCams = (state: RootState) => state.cams.homeCams;
export const getCoastCams = (state: RootState) => state.cams.coastCams;
export const getMoutainCams = (state: RootState) => state.cams.mountainCams;
export const getInlandCams = (state: RootState) => state.cams.inlandCams;

export default camsSlice.reducer;
