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
					<Link to='/live'>Live images</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};
