import { WebCam } from '../types/web_cam_type';

import './webcam_image.scss';

export const WebCameImage = ({ imageData, showHeader = true }: { imageData: WebCam; showHeader?: boolean }) => {
	console.log('imageData: ', imageData);
	const image = imageData.image.current.preview;

	return (
		<div className='webcam-image'>
			{showHeader && <h3 className='webcam-image__title'>{imageData.title}</h3>}
			<img className='webcam-image__image' src={image} alt='logo' />
		</div>
	);
};
