import React from 'react';

import About from '../About/index.md';
import Content from '../Content';
import Masthead from '../Masthead';
import useStyles from './styles';

export default function App() {
	const css = useStyles();

	return (
		<div className={css.container}>
			<Masthead />
			<Content className={css.content}><About /></Content>
		</div>
	);
}
