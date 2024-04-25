import { Socials as SocialsConfig } from "@config/socials";
import { lazy } from "react";

const Button = lazy(async () => import("@components/button"));

export default function Socials() {
	return (
		<nav className="socials">
			<ul className="social__list">
				{SocialsConfig.map(({ href, icon, label }, idx) => (
					<li key={idx}>
						<a href={href}>
							<Button
								aria-label={label}
								intent="primary"
								size="small"
								shape="square"
							>
								{icon}
							</Button>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
