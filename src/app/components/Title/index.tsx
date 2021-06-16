import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useStyles from './styles';

interface Props {
	children: string;
	className: string;
	interval: number;
}

export default function Title({ children, className, interval }: Props) {
	const css = useStyles();

	const classNames = {
		enter: css.slideIn,
		enterActive: css.slideInActive,
		exit: css.slideOut,
		exitActive: css.slideOutActive,
	};

	return (
		<TransitionGroup className={className} component="div">
			<CSSTransition key={children} classNames={classNames} timeout={interval}>
				<p>{children}</p>
			</CSSTransition>
		</TransitionGroup>
	);
}
