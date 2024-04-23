import { ThemeSwitcher } from '@components/theme';
import SocialsList from './socials-list';
import cn from 'classnames';
import { NavItems } from '@lib/nav-items';
import NavItem from '@components/nav-item';

export default function Dropdown({ show = false }: { show?: boolean }) {
	return (
		<div className={cn('header__dropdown', show && 'header__dropdown--show')}>
			<ol className='top__list'>
				<SocialsList />
				<div className='divider'></div>
				<ThemeSwitcher />
			</ol>
			<div className='dropdown__content'>
				<nav className='nav__bar'>
					{NavItems.map((navItem, idx) => (
						<NavItem
							key={idx}
							text={navItem.text}
							href={navItem.href}
							currentPage={navItem.currentPage}
						/>
					))}
				</nav>
				<p className='banner__text'>DELTA I BOKBITSCUPEN FÖR ATT VINNA PENGAR NU!</p>
			</div>
		</div>
	);
}
