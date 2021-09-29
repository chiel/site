import { createUseStyles } from 'react-jss';

import { Theme } from '../../theme';

export default createUseStyles((theme: Theme) => ({
	'@global': {
		html: {
			background: theme.pink,
			boxSizing: 'border-box',
			color: '#444',
			font: '300 14px / 28px merriweather, serif',
		},

		'*, *::before, *::after': {
			boxSizing: 'inherit',
		},

		body: {
			minHeight: 'calc(100vh - 8px)',
			margin: [4, 0],
			background: '#fff',
		},

		'h1, h2, h3': {
			margin: [36, 0, 0],
			fontFamily: 'ubuntu',
			letterSpacing: '-0.06em',
			textTransform: 'uppercase',
		},

		h1: {
			fontSize: 36,
		},

		h2: {
			fontSize: 27,
			letterSpacing: '.05em',
		},

		h3: {
			fontSize: 21,
			letterSpacing: '.05em',
		},

		p: {
			margin: 0,

			'& + p': {
				marginTop: 28,
			},
		},

		strong: {
			fontWeight: 400,
		},

		a: {
			color: '#000',
			transition: ['color', '.1s', 'ease-out'],

			'&:hover': {
				color: theme.pink,
			},
		},

		'@media (min-width: 420px)': {
			html: {
				fontSize: 18,
				lineHeight: '36px',
			},

			'p + p': {
				marginTop: 36,
			},
		},
	},

	container: {
		padding: ['calc(100vh - 4px)', 0, 0],
	},
}));
