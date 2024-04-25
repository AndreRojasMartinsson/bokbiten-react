import { Menu } from "lucide-react";
import "./styles.css";
import { NavLinks } from "@config/nav-links";
import { lazy } from "react";

const Input = lazy(async () => import("@components/input"));
const NavigationItem = lazy(async () => import("@components/navigation-item"));
const Button = lazy(async () => import("@components/button"));
const Banner = lazy(async () => import("@components/header/banner"));
const Logo = lazy(async () => import("@components/header/logo"));

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
				{NavLinks.map((navLink, idx) => (
					<NavigationItem
						key={idx}
						text={navLink.text}
						href={navLink.href}
						currentPage={navLink.currentPage}
					/>
				))}
			</ol>
		</div>
	);
}
