import React from 'react';

import useStyles from './styles';

export default function Masthead() {
	const css = useStyles();

	return (
		<section className={css.container}>
			<figure className={css.background} />
			<div className={css.content}>
				<h1>Chiel <span>Kunkels</span></h1>
				<div className={css.titles}>
					<p>Full-stack developer</p>
				</div>
			</div>
		</section>
	);
}
