import { WebCam } from '../types/web_cam_type';

export const WebCameImage = ({ imageData }: { imageData: WebCam }) => {
	console.log('imageData: ', imageData);
	const image = imageData.image.current.preview;

	return (
		<div>
			<h3>{imageData.title}</h3>
			<img src={image} className='App-logo' alt='logo' />
		</div>
	);
};
