import Button from '@components/button';
import { Menu } from 'lucide-react';
import Banner from '@components/header/banner';

import './styles.css';
import NavigationList from '@components/navigation-list';
import Logo from '@components/header/logo';

export default function Header() {
	return (
		<header className='site__header'>
			<Banner />
			<MiddleContainer />
			<Navigation />
		</header>
	);
}

function MiddleContainer() {
	return (
		<div className='header__center'>
			<Logo />
			<form
				className='search'
				method='get'
			></form>
		</div>
	);
}

function Navigation() {
	return (
		<div className='header__nav'>
			<NavigationList className='nav__bar' />
			<Button
				intent='primary'
				size='small'
				shape='square'
			>
				<Menu size={16} />
			</Button>
		</div>
	);
}
