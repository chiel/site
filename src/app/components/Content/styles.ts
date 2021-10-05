import { createUseStyles } from 'react-jss';

export default createUseStyles({
	container: {
		maxWidth: 840,
		margin: [0, 'auto'],
		padding: [40, 20, 40],

		'& h1': {
			margin: [80, 0, 40],
			textAlign: 'center',
		},

		'& h2': {
			margin: [80, 0, 40],
			textAlign: 'center',
		},

		'& :first-child': {
			marginTop: 0,
		},
	},
});
