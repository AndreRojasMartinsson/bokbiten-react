import "@styles/components/divider.css";
import cn from "classnames";

export default function Divider({
	layout = "horizontal",
	placement = "start",
}: {
	layout?: "horizontal" | "vertical";
	placement?: "center" | "start" | "end";
}) {
	return (
		<div
			className={cn("divider", `divider--${layout}`, `divider--${placement}`)}
		></div>
	);
}
