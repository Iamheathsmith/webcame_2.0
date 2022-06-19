import { LiveWebCameImage } from '../../images/live_image';
import { WebCameImage } from '../../images/webcam_image';
import { WeatherInfo } from './weather';

import './single_web_cam.scss';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCams, setAllCams } from '../../redux/cams_slice';
import { useCallback, useEffect, useState } from 'react';
import { getCameraDataAndIndexById } from '../../helpers';

export const SingleWebCam = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [fetchComplete, setFetchComplete] = useState(false);

	const allCameras = useSelector(getAllCams);

	const image = id ? allCameras?.[id] : undefined;

	const getWebcams = useCallback(async () => {
		setFetchComplete(true);
		const webCams = await getCameraDataAndIndexById([id as string]);

		dispatch(setAllCams(webCams));
	}, [dispatch, id]);

	useEffect(() => {
		if (!image && !fetchComplete) {
			getWebcams();
		}
	}, [fetchComplete, getWebcams, image]);

	if (!image) {
		return null;
	}

	return (
		<div className='single-cam'>
			<h2 className='single-cam__title'>{image.title}</h2>
			<span className='single-cam__status'>- {image.status}</span>
			<div className='single-cam__top-section'>
				<WebCameImage key={image.id} imageData={image} showHeader={false} />
				<WeatherInfo lat={String(image.location.latitude)} long={String(image.location.longitude)} />
			</div>
			<h4>Live Camera</h4>
			<LiveWebCameImage imageData={image} showHeader={false} />
		</div>
	);
};
