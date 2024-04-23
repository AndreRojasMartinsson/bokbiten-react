import Header from "@components/header";
import Hero from "@components/hero";
import { ThemeProvider } from "@components/theme";

function Main() {
	return (
		<>
			<Header />
			<Hero />
		</>
	);
}

function App() {
	return (
		<ThemeProvider>
			<Main />
		</ThemeProvider>
	);
}

export default App;
