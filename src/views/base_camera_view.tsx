import { Link } from 'react-router-dom';
import { WebCameImage } from '../images/webcam_image';
import { IndexedCameras } from '../redux/cams_slice';

export const BaseCameraView = ({ cameras }: { cameras: IndexedCameras }) => {
	return (
		<div className='home__images'>
			{Object.values(cameras)?.map((image) => {
				return (
					<Link key={image.id} className='home__images-link' to={`/web_cam/${image.id}`} state={{ image: image }}>
						<WebCameImage key={image.id} imageData={image} />
					</Link>
				);
			})}
		</div>
	);
};
