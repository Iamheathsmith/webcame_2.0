import { useEffect, useState } from 'react';

import { WebCam } from './types/web_cam_type';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './views/home/home';
import { fetchMultiWebcam } from './api_calls/windy_api';
import {
	florence101Id,
	BayshoreNewportId,
	pacificCityId,
	narragansettBeachId,
	yaquinaBayJettyId,
	lincolnCityId,
	cushmanId,
	brandonWestId,
	bayCityEastId,
	barviewJettyLookoutId,
} from './consts/web_cam_ids';
import { SingleWebCam } from './views/single_web_cam';

import './app.scss';
import { NavBar } from './nav_bar';
import { CoastCams } from './views/coast_cams';
import { MountainCams } from './views/mountain_cams';
import { InlandCams } from './views/inland_cams';

const ROOT_URL_FOR_GITHUB_PAGES = 'webcame_2.0';

function App() {
	const [images, setImages] = useState<Array<WebCam>>([]);

	const getWebcams = async () => {
		const boom = await fetchMultiWebcam([
			florence101Id,
			BayshoreNewportId,
			pacificCityId,
			narragansettBeachId,
			yaquinaBayJettyId,
			lincolnCityId,
			cushmanId,
			brandonWestId,
			bayCityEastId,
			barviewJettyLookoutId,
		]);
		setImages(boom);
	};

	useEffect(() => {
		if (!images.length) {
			getWebcams();
		}
	}, [images]);

	return (
		<Router basename={`/${ROOT_URL_FOR_GITHUB_PAGES}`}>
			<div>
				<NavBar />

				{/* <header className='app-header'>For Tim</header> */}

				<Routes>
					<Route path='/' element={<Home images={images} />} />
					<Route path='/coast_cams' element={<CoastCams />} />
					<Route path='/mountain_cams' element={<MountainCams />} />
					<Route path='/inland_cams' element={<InlandCams />} />
					<Route path='/web_cam/:id' element={<SingleWebCam />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
