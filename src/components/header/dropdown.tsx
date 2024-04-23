import { ThemeSwitcher } from '@components/theme';
import SocialsList from './socials-list';
import cn from 'classnames';
import NavigationList from '@components/navigation-list';

export default function Dropdown({ show = false }: { show?: boolean }) {
	return (
		<div className={cn('header__dropdown', show && 'header__dropdown--show')}>
			<ol className='top__list'>
				<SocialsList />
				<div className='divider'></div>
				<ThemeSwitcher />
			</ol>
			<div className='dropdown__content'>
				<NavigationList className='nav__bar' />
				<p className='banner__text'>DELTA I BOKBITSCUPEN FÖR ATT VINNA PENGAR NU!</p>
			</div>
		</div>
	);
}
