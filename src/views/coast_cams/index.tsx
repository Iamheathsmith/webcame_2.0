import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coastCameraIds } from '../../consts/web_cam_ids';
import { getCameraDataAndIndexById } from '../../helpers';
import { getCoastCams, setCoastCams } from '../../redux/cams_slice';
import { BaseCameraView } from '../base_camera_view';

export const CoastCams = () => {
	const dispatch = useDispatch();

	const coastCams = useSelector(getCoastCams);

	const getWebcams = useCallback(async () => {
		const webCams = await getCameraDataAndIndexById(coastCameraIds);

		dispatch(setCoastCams(webCams));
	}, [dispatch]);

	useEffect(() => {
		if (!coastCams) {
			getWebcams();
		}
	}, [coastCams, getWebcams]);

	if (!coastCams) {
		return null;
	}

	return (
		<div className='home__images'>
			<BaseCameraView cameras={coastCams} />
		</div>
	);
};
