import { getPreferredTheme, ThemeContext } from '@lib/theme';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

export default function ThemeProvider({ children }: PropsWithChildren) {
	const mountRun = useRef<boolean>(false);
	const [theme, setTheme] = useState<string | null>(() => {
		if (typeof window !== 'object') return null;

		return getPreferredTheme();
	});

	useEffect(() => {
		if (!mountRun.current) {
			mountRun.current = true;
			return;
		}

		if (theme) return;

		const currentTheme = localStorage.getItem('theme');
		if (currentTheme) return setTheme(currentTheme);

		const preferredTheme = getPreferredTheme();
		setTheme(preferredTheme);
	}, [setTheme, theme]);

	useEffect(() => {
		const handleChange = (e: StorageEvent) => setTheme(e.newValue);

		window.addEventListener('storage', handleChange);
		return () => window.removeEventListener('storage', handleChange);
	}, [setTheme]);

	return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}
