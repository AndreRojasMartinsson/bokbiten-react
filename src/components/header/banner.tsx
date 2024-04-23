import { Menu } from 'lucide-react';
import { ThemeSwitcher } from '@components/theme';
import Button from '@components/button';
import Dropdown from './dropdown';
import SocialsList from './socials-list';
import { useState } from 'react';

export default function HeaderBanner() {
	const [show, setShow] = useState<boolean>(false);

	return (
		<div className='site__banner'>
			<SocialsList />
			<h2 className='banner__text'>DELTA I BOKBITSCUPEN FÖR ATT VINNA PENGAR NU!</h2>
			<div className='banner__right'>
				<ThemeSwitcher />
				<Button
					id='menu-button'
					shape='square'
					size='small'
					onClick={() => setShow(prev => !prev)}
				>
					<Menu size={18} />
				</Button>
			</div>
			<Dropdown show={show} />
		</div>
	);
}
