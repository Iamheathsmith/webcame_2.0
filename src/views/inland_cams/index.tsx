import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inlandCameraIds } from '../../consts/web_cam_ids';
import { getCameraDataAndIndexById } from '../../helpers';
import { getInlandCams, setInlandCams } from '../../redux/cams_slice';
import { BaseCameraView } from '../base_camera_view';

export const InlandCams = () => {
	const dispatch = useDispatch();

	const mountainCams = useSelector(getInlandCams);

	const getWebcams = useCallback(async () => {
		const webCams = await getCameraDataAndIndexById(inlandCameraIds);

		dispatch(setInlandCams(webCams));
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
