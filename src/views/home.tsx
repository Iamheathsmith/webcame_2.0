import { WebCameImage } from '../images/webcam_image';
import { WebCam } from '../types/web_cam_type';

export const Home = ({ images }: { images: Array<WebCam> }) => {
	return (
		<div className='app-body__images'>
			{images.map((image) => {
				return <WebCameImage key={image.id} imageData={image} />;
			})}
		</div>
	);
};
