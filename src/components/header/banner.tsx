import Button from "@components/button";
import Dropdown from "@components/header/dropdown";
import { ThemeSwitcher } from "@components/theme";
import { Menu } from "lucide-react";
import { useState } from "react";
import "@styles/components/socials.css";
import Socials from "../socials";

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
