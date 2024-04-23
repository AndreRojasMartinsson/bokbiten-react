module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/stylistic',
		'plugin:github/typescript',
		'plugin:sonarjs/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'google',
		'react-app',
		'problems',
		'eslint-config-clean-typescript',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'github', 'sonarjs', 'unicorn', 'jsx-a11y', 'notice'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'notice/notice': [
			'error',
			{
				mustMatch: 'Copyright \\(c\\) [0-9]{0,4}, Nick Deis',
				template: '/** Copyright (c) <%= YEAR %>, Nick Deis **/',
			},
		],
	},
};
