const { configure, presets } = require('eslint-kit');

module.exports = configure({
	presets: [
		presets.imports({
			sort: {
				newline: 'always',
				groups: [
					// React builtins prefixed with `react`.
					['^react'],
					// Things that start with a letter (or digit or underscore), or `@` followed by a letter.
					['^@?\\w'],
					// Packages.
					// Relative imports.
					// Anything that starts with a dot.
					['^\\.'],
					// Side effect imports.
					['^\\u0000'],
					// Absolute imports and other imports such as Vue-style `@/foo`.
					// Anything not matched in another group.
					['^'],
				],
			},
		}),
		presets.node(),
		presets.prettier({
			endOfLine: 'lf',
			semi: true,
			singleQuote: true,
			useTabs: true,
			tabWidth: 4,
			quoteProps: 'as-needed',
			trailingComma: 'es5',
			bracketSpacing: true,
			jsxBracketSameLine: false,
		}),
		presets.react({
			version: 'detect',
		}),
	],
	extend: {
		rules: {
			'import/no-unresolved': 'off',
		},
	},
});
