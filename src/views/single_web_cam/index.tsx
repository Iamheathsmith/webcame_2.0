import { useLocation } from 'react-router-dom';
import { LiveWebCameImage } from '../../images/live_image';
import { WebCameImage } from '../../images/webcam_image';
import { WebCam } from '../../types/web_cam_type';
import { WeatherInfo } from './weather';

import './single_web_cam.scss';

export const SingleWebCam = () => {
	const location = useLocation();

	const { image } = location.state as { image: WebCam };

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
