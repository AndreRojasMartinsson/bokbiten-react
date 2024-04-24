import { Socials as SocialsConfig } from "@config/socials";
import { lazy } from "react";
// import Button from "./button";

const Button = lazy(async () => import("@components/button"));

export default function Socials() {
	return (
		<nav className="socials">
			<ul className="social__list">
				{SocialsConfig.map((icon, idx) => (
					<li key={idx}>
						<Button intent="primary" size="small" shape="square">
							{icon}
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
}
