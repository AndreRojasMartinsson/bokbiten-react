import Button from "@components/button";
import type { ReactNode } from "react";

export function SocialItem({ icon }: { icon: ReactNode }) {
	return (
		<li>
			<Button intent="primary" size="small" shape="square">
				{icon}
			</Button>
		</li>
	);
}
