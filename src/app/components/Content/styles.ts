import { createUseStyles } from 'react-jss';

export default createUseStyles({
	container: {
		maxWidth: 840,
		margin: [0, 'auto'],
		padding: [0, 20, 40],

		'& h2': {
			margin: [80, 0, 40],
			textAlign: 'center',
		},
	},
});
