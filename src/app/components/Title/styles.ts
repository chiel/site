import { createUseStyles } from 'react-jss';

export default createUseStyles({
	slideIn: {
		transform: 'translate3d(0, 100%, 0)',
		transition: ['transform', '.25s', 'ease-out'],
	},

	slideInActive: {
		transform: 'translate3d(0, 0, 0)',
	},

	slideOut: {
		transform: 'translate3d(0, 0, 0)',
		transition: ['transform', '.25s', 'ease-out'],
	},

	slideOutActive: {
		transform: 'translate3d(0, -100%, 0)',
	},
});
