import { createContext, Dispatch, SetStateAction, useContext } from 'react';

const prefersDarkMQ = '(prefers-color-scheme: dark)';

// Theme Context
export type ThemeContextType = [string | null, Dispatch<SetStateAction<string | null>>];
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Utils
export function getPreferredTheme(): string {
	return window.matchMedia(prefersDarkMQ).matches ? 'dark' : 'light';
}

// Hooks
export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
}
