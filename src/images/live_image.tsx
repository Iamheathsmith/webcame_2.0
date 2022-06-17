import { WebCam } from '../types/web_cam_type';

export const LiveWebCameImage = ({ imageData, showHeader = true }: { imageData: WebCam; showHeader?: boolean }) => {
	const test = imageData.player.day.embed;
	return (
		<div className='live-image'>
			{showHeader && <h3>{imageData.title}</h3>}
			<iframe title={imageData.title} src={test}></iframe>
		</div>
	);
};
