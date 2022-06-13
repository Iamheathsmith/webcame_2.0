import { WebCam } from '../types/web_cam_type';

export const LiveWebCameImage = ({ imageData }: { imageData: WebCam }) => {
	const test = imageData.player.day.embed;
	return (
		<div>
			<h3>{imageData.title}</h3>
			<iframe title={imageData.title} src={test}></iframe>
		</div>
	);
};
