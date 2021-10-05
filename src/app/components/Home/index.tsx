import React from 'react';

import About from '../About/index.md';
import Content from '../Content';
import History from '../History';
import Masthead from '../Masthead';

import useStyles from './styles';

export default function Home() {
	const css = useStyles();

	return (
		<div className={css.container}>
			<Masthead />
			<Content className={css.content}><About /></Content>
			<History />
		</div>
	);
}
