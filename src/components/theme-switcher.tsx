import { useTheme } from "@lib/theme";
import { MoonStar } from "lucide-react";
import { lazy } from "react";

const Button = lazy(async () => import("@components/button"));

export default function ThemeSwitcher() {
	const [theme, setTheme] = useTheme();

	return (
		<Button
			aria-label={`Byt tema till ${theme === "light" ? "dark" : "light"}`}
			id="theme-switcher"
			intent="primary"
			size="small"
			shape="square"
			onClick={() =>
				setTheme((_theme) => (_theme === "light" ? "dark" : "light"))
			}
		>
			<MoonStar size={18} />
		</Button>
	);
}
