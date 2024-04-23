import Header from '@components/header';
import { ThemeProvider } from '@components/theme';

function Main() {
	return (
		<>
			<Header />
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
