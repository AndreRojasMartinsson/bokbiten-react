import { Menu } from "lucide-react";
import { lazy, useState } from "react";
import "@styles/components/socials.css";

const Socials = lazy(async () => import("@components/socials"));
const Button = lazy(async () => import("@components/button"));
const ThemeSwitcher = lazy(async () => import("@components/theme-switcher"));
const Dropdown = lazy(async () => import("@components/header/dropdown"));

export default function Banner() {
	const [show, setShow] = useState<boolean>(false);

	return (
		<div className="site__banner">
			<Socials />
			<h2 className="banner__text">
				DELTA I BOKBITSCUPEN FÖR ATT VINNA PENGAR NU!
			</h2>
			<div className="banner__right">
				<ThemeSwitcher />
				<Button
					aria-label={show ? "Stäng meny" : "Öppna meny"}
					id="menu-button"
					shape="square"
					size="small"
					onClick={() => setShow((prev) => !prev)}
				>
					<Menu size={18} />
				</Button>
			</div>
			<Dropdown show={show} />
		</div>
	);
}
