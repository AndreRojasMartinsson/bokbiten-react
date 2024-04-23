import Button from "@components/button";
import { Menu } from "lucide-react";
import Banner from "@components/header/banner";
import Logo from "@components/header/logo";
import "./styles.css";
import { NavLinks } from "@config/nav-links";
import NavigationItem from "@components/navigation/navigation-item";
import Input from "@components/input";

export default function Header() {
	return (
		<header className="site__header">
			<Banner />
			<MiddleContainer />
			<Navigation />
		</header>
	);
}

function MiddleContainer() {
	return (
		<div className="header__center">
			<Logo />
			<form className="search__bar" method="get">
				<Input />
			</form>
		</div>
	);
}

function Navigation() {
	return (
		<div className="header__nav">
			<ol className="nav__bar">
				{NavLinks.map((navLink) => (
					<NavigationItem
						text={navLink.text}
						href={navLink.href}
						currentPage={navLink.currentPage}
					/>
				))}
			</ol>
			<Button intent="primary" size="small" shape="square">
				<Menu size={16} />
			</Button>
		</div>
	);
}
