import { Link } from 'react-router-dom';
import './nav_bar.scss';

export const NavBar = () => {
	return (
		<nav className='nav-bar'>
			<Link className='web-site-name' to='/'>
				Web Cams For You
			</Link>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/coast_cams'>Coast Cams</Link>
				</li>
				<li>
					<Link to='/mountain_cams'>Mountain Cams</Link>
				</li>
				<li>
					<Link to='/inland_cams'>Inland Cams</Link>
				</li>
			</ul>
		</nav>
	);
};
