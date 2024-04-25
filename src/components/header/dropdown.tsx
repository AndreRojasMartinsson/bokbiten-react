import cn from "classnames";
import { NavLinks } from "@config/nav-links";
import { lazy } from "react";

const NavigationItem = lazy(async () => import("@components/navigation-item"));
const ThemeSwitcher = lazy(async () => import("@components/theme-switcher"));
const Divider = lazy(async () => import("@components/divider"));
const Socials = lazy(async () => import("@components/socials"));

export default function Dropdown({ show = false }: { show?: boolean }) {
	return (
		<div className={cn("header__dropdown", show && "header__dropdown--show")}>
			<div className="top__list">
				<Socials />
				<Divider layout="vertical" placement="center" />
				<ThemeSwitcher />
			</div>
			<div className="dropdown__content">
				<ol className="nav__bar">
					{NavLinks.map((navLink, idx) => (
						<NavigationItem
							text={navLink.text}
							key={idx}
							href={navLink.href}
							currentPage={navLink.currentPage}
						/>
					))}
				</ol>
				<p className="banner__text">
					DELTA I BOKBITSCUPEN FÖR ATT VINNA PENGAR NU!
				</p>
			</div>
		</div>
	);
}
