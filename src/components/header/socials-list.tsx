import { Socials } from "@config/socials";
import { lazy } from "react";

const Button = lazy(async () => import("@components/button"));

export default function SocialsList() {
	return (
		<ol className="socials">
			{Socials.map(({ href, icon, label }, idx) => (
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
		</ol>
	);
}
