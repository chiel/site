import { createUseStyles } from 'react-jss';

export const lineAnimationDuration = 250;

export default createUseStyles({
	'@keyframes appear': {
		from: { opacity: 0 },
		to: { opacity: 1 },
	},

	'@keyframes nodeAppear': {
		from: { transform: 'scale(0)' },
		to: { transform: 'scale(1)' },
	},

	container: {
		height: 20,
	},

	inner: {
		position: 'relative',
		padding: [9, 0],

		'&::before': {
			content: '""',
			display: 'block',
			height: 2,
			background: '#444',
			animation: `${lineAnimationDuration}ms linear backwards $appear`,
		},
	},

	hidden: {
		display: 'none',
	},

	node: {
		display: 'block',
		position: 'absolute',
		top: 2,
		padding: 0,
		border: [2, 'solid', '#444'],
		borderRadius: '50%',
		animation: '.2s ease-out backwards $nodeAppear',
		background: '#fff',
		textIndent: '-999em',

		'&::before': {
			content: '""',
			position: 'absolute',
			top: 2,
			left: 2,
			right: 2,
			bottom: 2,
			borderRadius: '50%',
			background: '#444',
			opacity: 0,
			transition: 'opacity .2s ease-out',
		},
	},

	active: {
		'&::before': {
			opacity: 1,
		},
	},

	large: {
		top: 1,
		width: 18,
		height: 18,
		margin: [0, 0, 0, -9],

		'&::before': {
			top: 3,
			left: 3,
			right: 3,
			bottom: 3,
		},
	},

	small: {
		top: 4,
		width: 12,
		height: 12,
		margin: [0, 0, 0, -6],
	},
});
