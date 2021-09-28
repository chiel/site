import { createUseStyles } from 'react-jss';

import { Theme } from '../../theme';

import img from './masthead.jpg';

export default createUseStyles((theme: Theme) => ({
	container: {
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 'calc(100vh - 4px)',

		'&::after': {
			content: '""',
			position: 'absolute',
			zIndex: 3,
			left: 0,
			right: 0,
			bottom: 0,
			height: 8,
			background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, .2))',
		},
	},

	background: {
		position: 'absolute',
		zIndex: 1,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		margin: 0,
		background: `url(${img}) no-repeat center / cover`,
		transform: 'translateZ(0)',
	},

	content: {
		position: 'relative',
		zIndex: 2,
		width: '100%',
		backfaceVisibility: 'hidden',
		transform: 'translateZ(0)',

		'& h1': {
			margin: [0, 0, 0, -9],
			color: theme.pink,
			fontSize: 88,
			lineHeight: '54px',
			textAlign: 'center',

			'& span': {
				display: 'block',
				color: '#444',
				fontSize: 57,
			},
		},
	},

	titles: {
		overflow: 'hidden',
		position: 'relative',
		width: '100%',
		height: 26,
		margin: [24, 0, 0],
		fontFamily: 'ubuntu',
		fontSize: 18,
		fontWeight: 700,
		lineHeight: '26px',
		textAlign: 'center',
		textTransform: 'uppercase',

		'& p': {
			position: 'absolute',
			top: 0,
			width: '100%',
			margin: 0,
			textAlign: 'center',
		}
	},

	'@media (min-width: 420px)': {
		content: {
			'& h1': {
				fontSize: 120,
				lineHeight: '73px',

				'& span': {
					fontSize: 78,
				},
			},
		},

		titles: {
			height: 32,
			fontSize: 24,
			lineHeight: '32px',
		},
	},
}));
