import { useEffect, useState } from 'react';

import { WebCam } from './types/web_cam_type';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './views/home/home';
import { About } from './views/about';
import { LiveWebCams } from './views/live_views';
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
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/live'>Live images</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</nav>

				{/* <header className='app-header'>For Tim</header> */}

				<Routes>
					<Route path='/' element={<Home images={images} />} />
					<Route path='/live' element={<LiveWebCams images={images} />} />
					<Route path='/about' element={<About />} />
					<Route path='/web_cam/:id' element={<SingleWebCam />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
