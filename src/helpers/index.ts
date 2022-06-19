import { fetchMultiWebcam } from '../api_calls/windy_api';
import { IndexedCameras } from '../redux/cams_slice';
import { WebCam } from '../types/web_cam_type';

const camsIndexById = (cams: Array<WebCam>) =>
	cams.reduce((acc: IndexedCameras, cam: WebCam) => {
		acc[cam.id] = cam;
		return acc;
	}, {} as IndexedCameras);

export const getCameraDataAndIndexById = async (cameraIds: Array<string>) => {
	const cameraData = await fetchMultiWebcam(cameraIds);
	return camsIndexById(cameraData);
};

export const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};
