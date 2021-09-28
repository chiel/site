import React from 'react';

import useStyles from './styles';

interface Props {
	children: React.ReactNode;
}

export default function Content({ children }: Props) {
	const css = useStyles();

	return (
		<div className={css.container}>
			{children}
		</div>
	);
}
