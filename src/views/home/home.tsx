import { WebCameImage } from '../../images/webcam_image';
import { WebCam } from '../../types/web_cam_type';
import { Link } from 'react-router-dom';

import './home.scss';

export const Home = ({ images }: { images: Array<WebCam> }) => {
	console.log('images: ', images);
	return (
		<div className='home__images'>
			{images?.map((image) => {
				return (
					<Link key={image.id} className='home__images-link' to={`/web_cam/${image.id}`} state={{ image: image }}>
						<WebCameImage key={image.id} imageData={image} />
					</Link>
				);
			})}
		</div>
	);
};
