import cn from 'classnames';
import React from 'react';

import useStyles from './styles';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function Content({ children, className }: Props) {
	const css = useStyles();

	return (
		<div className={cn(css.container, className)}>
			{children}
		</div>
	);
}
