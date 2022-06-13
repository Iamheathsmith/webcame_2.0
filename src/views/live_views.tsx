import { LiveWebCameImage } from '../images/live_image';
import { WebCam } from '../types/web_cam_type';

export const LiveWebCams = ({ images }: { images: Array<WebCam> }) => {
	return (
		<div className='app-body__images'>
			{images.map((image) => {
				return <LiveWebCameImage key={image.id} imageData={image} />;
			})}
		</div>
	);
};
