import { Link } from 'react-router-dom';
import { WebCameImage } from '../images/webcam_image';
import { IndexedCameras } from '../redux/cams_slice';

export const BaseCameraView = ({ cameras }: { cameras: IndexedCameras }) => {
	return (
		<>
			{Object.values(cameras)?.map((image) => {
				return (
					<Link key={image.id} className='home__images-link' to={`/web_cam/${image.id}`}>
						<WebCameImage key={image.id} imageData={image} />
					</Link>
				);
			})}
		</>
	);
};
