import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { getPreferredTheme } from '@lib/theme.ts';
import '@styles/index.css';

function update(theme: string | boolean) {
	if (typeof theme === 'boolean') {
		if (theme) return document.documentElement.classList.add('dark');

		document.documentElement.classList.remove('dark');
		return;
	}

	if (theme === 'dark') return document.documentElement.classList.add('dark');
	document.documentElement.classList.remove('dark');
}

function initTheme() {
	if (localStorage.getItem('theme') === null) {
		const preferredTheme = getPreferredTheme();
		localStorage.setItem('theme', preferredTheme);

		update(preferredTheme);
	} else {
		const currentTheme = localStorage.getItem('theme')!;
		update(currentTheme);
	}
}

void initTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
