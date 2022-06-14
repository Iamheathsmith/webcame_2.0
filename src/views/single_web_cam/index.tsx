import { useLocation } from 'react-router-dom';
import { LiveWebCameImage } from '../../images/live_image';
import { WebCameImage } from '../../images/webcam_image';
import { WebCam } from '../../types/web_cam_type';

import './single_web_cam.scss';

export const SingleWebCam = () => {
	const location = useLocation();

	const { image } = location.state as { image: WebCam };

	return (
		<div className='single-cam'>
			<h2 className='single-cam__title'>{image.title}</h2>
			<span className='single-cam__status'>- {image.status}</span>
			<WebCameImage key={image.id} imageData={image} showHeader={false} />
			<LiveWebCameImage imageData={image} showHeader={false} />
		</div>
	);
};
