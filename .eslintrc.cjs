module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:github/typescript',
		'plugin:sonarjs/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'google',
		'problems',
		'eslint-config-clean-typescript',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', '**.d.ts'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['react-refresh', '@typescript-eslint', 'github', 'sonarjs', 'unicorn', 'jsx-a11y'],
	rules: {
		'require-jsdoc': 'off',
		'valid-jsdoc': [
			'warn',
			{
				requireReturnType: false,
				requireParamType: false,
			},
		],
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'no-restricted-syntax': 'off',
	},
};
