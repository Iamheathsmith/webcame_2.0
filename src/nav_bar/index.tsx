import { Link, NavLink } from 'react-router-dom';
import { getWindowDimensions } from '../helpers';

import cameraLogo from '../assets/camera-icon-21.png';

import './nav_bar.scss';

export const NavBar = () => {
	const { width } = getWindowDimensions();

	const showText = width > 400;

	const CamLink = ({ text, to }: { text: string; to: string }) => {
		return (
			<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={to}>
				{text}
			</NavLink>
		);
	};

	return (
		<nav className='nav-bar'>
			<Link className='web-site-name' to='/'>
				<img className='web-site-name--logo' src={cameraLogo} alt='logo' />
				{showText && 'Web cams for you!'}
			</Link>
			<ul>
				<li>
					<CamLink to='/' text='Home' />
				</li>
				<li>
					<CamLink to='/coast_cams' text='Coast' />
				</li>
				<li>
					<CamLink to='/mountain_cams' text='Mountain' />
				</li>
				<li>
					<CamLink to='/inland_cams' text='Inland' />
				</li>
			</ul>
		</nav>
	);
};
