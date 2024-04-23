import Button from "@components/button";
import NavItem from "@components/nav-item";
import { NavItems } from "@lib/nav-items";
import { Menu } from "lucide-react";

export default function HeaderNav() {
	return (
		<div className="header__nav">
			<nav className="nav__bar">
				{NavItems.map((navItem, idx) => (
					<NavItem
						key={idx}
						text={navItem.text}
						href={navItem.href}
						currentPage={navItem.currentPage}
					/>
				))}
			</nav>
			<Button intent="primary" size="small" shape="square">
				<Menu size={16} />
			</Button>
		</div>
	);
}
