import { NavLinks } from '@config/nav-links';

import { AnchorHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import '@styles/components/socials.css';

interface NavItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
	currentPage?: boolean;
	text?: ReactNode;
}

function NavigationItem({ text, currentPage = false, className, ...props }: NavItemProps) {
	return (
		<a
			{...props}
			className={cn(className, 'nav__item', currentPage && 'nav__item--active')}
		>
			{text}
		</a>
	);
}

export default function NavigationList({ className = '' }: { className?: string }) {
	return (
		<ol className={className}>
			{NavLinks.map(navLink => (
				<NavigationItem
					text={navLink.text}
					href={navLink.href}
					currentPage={navLink.currentPage}
				/>
			))}
		</ol>
	);
}
