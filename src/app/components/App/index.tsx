import React from 'react';

import About from '../About/index.md';
import Content from '../Content';
import Masthead from '../Masthead';
import useStyles from './styles';

export default function App() {
	useStyles();

	return (
		<React.Fragment>
			<Masthead />
			<Content><About /></Content>
		</React.Fragment>
	);
}
