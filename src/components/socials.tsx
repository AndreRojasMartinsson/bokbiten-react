import { Socials as SocialsConfig } from "@config/socials";
import Button from "./button";

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
