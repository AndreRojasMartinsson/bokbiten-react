import { ThemeSwitcher } from "@components/theme";
import cn from "classnames";
import NavigationItem from "@components/navigation-item";
import { NavLinks } from "@config/nav-links";
import Socials from "@components/socials";
import Divider from "@components/divider";

export default function Dropdown({ show = false }: { show?: boolean }) {
	return (
		<div className={cn("header__dropdown", show && "header__dropdown--show")}>
			<ol className="top__list">
				<Socials />
				<Divider layout="vertical" placement="center" />
				<ThemeSwitcher />
			</ol>
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
