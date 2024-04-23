import { useTheme } from "@lib/theme";
import Button from "./button";
import { MoonStar } from "lucide-react";

export default function ThemeSwitcher() {
	const [, setTheme] = useTheme();

	return (
		<Button
			id="theme-switcher"
			intent="primary"
			size="small"
			shape="square"
			onClick={() =>
				setTheme((theme) => (theme === "light" ? "dark" : "light"))
			}
		>
			<MoonStar size={18} />
		</Button>
	);
}
