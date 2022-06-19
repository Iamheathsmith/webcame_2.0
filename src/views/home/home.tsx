import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homePageIds } from '../../consts/web_cam_ids';
import { getCameraDataAndIndexById } from '../../helpers';
import { getHomeCams, setHomeCams } from '../../redux/cams_slice';
import { BaseCameraView } from '../base_camera_view';
import './home.scss';

export const Home = () => {
	const dispatch = useDispatch();

	const homeCams = useSelector(getHomeCams);

	const getWebcams = useCallback(async () => {
		const webCams = await getCameraDataAndIndexById(homePageIds);

		dispatch(setHomeCams(webCams));
	}, [dispatch]);

	useEffect(() => {
		if (!homeCams) {
			getWebcams();
		}
	}, [homeCams, getWebcams]);

	if (!homeCams) {
		return null;
	}

	return (
		<div className='home__images'>
			<BaseCameraView cameras={homeCams} />
		</div>
	);
};
