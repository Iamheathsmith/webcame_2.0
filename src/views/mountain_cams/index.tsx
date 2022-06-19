import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mountainCameraIds } from '../../consts/web_cam_ids';
import { getCameraDataAndIndexById } from '../../helpers';
import { getMoutainCams, setMoutainCams } from '../../redux/cams_slice';
import { BaseCameraView } from '../base_camera_view';

export const MountainCams = () => {
	const dispatch = useDispatch();

	const mountainCams = useSelector(getMoutainCams);

	const getWebcams = useCallback(async () => {
		const webCams = await getCameraDataAndIndexById(mountainCameraIds);

		dispatch(setMoutainCams(webCams));
	}, [dispatch]);

	useEffect(() => {
		if (!mountainCams) {
			getWebcams();
		}
	}, [mountainCams, getWebcams]);

	if (!mountainCams) {
		return null;
	}

	return (
		<div className='home__images'>
			<BaseCameraView cameras={mountainCams} />
		</div>
	);
};
