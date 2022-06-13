import { useEffect, useState } from 'react';

import { WebCam } from './types/web_cam_type';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './views/home';
import { About } from './views/about';
import { LiveWebCams } from './views/live_views';
import { fetchMultiWebcam } from './api_calls/windy_api';
import { florence101Id, BayshoreNewportId, pacificCityId, narragansettBeachId } from './consts/web_cam_ids';

import './app.scss';

function App() {
	const [images, setImages] = useState<Array<WebCam>>([]);

	const getWebcams = async () => {
		const boom = await fetchMultiWebcam([florence101Id, BayshoreNewportId, pacificCityId, narragansettBeachId]);
		setImages(boom);
	};

	useEffect(() => {
		if (!images.length) {
			getWebcams();
		}
	}, [images]);

	return (
		<Router>
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

				<header className='app-header'>For Tim</header>

				<Routes>
					<Route path='/' element={<Home images={images} />} />
					<Route path='/live' element={<LiveWebCams images={images} />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
