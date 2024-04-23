import "@styles/components/header.css";
import Banner from "./banner";
import Center from "./center";
import Navigation from "./navigation";

export default function Header() {
	return (
		<header className="site__header">
			<Banner />
			<Center />
			<Navigation />
		</header>
	);
}
