import cn from 'classnames';
import React, { useMemo } from 'react';

import Title from '../Title';

import { useLoopedValues, useScrollOffset, useViewportHeight } from './hooks';
import useStyles, { stickyHeight, topOffset } from './styles';

const interval = 2000;

export default function Masthead() {
	const css = useStyles();
	const height = useViewportHeight();
	const offset = useScrollOffset();
	const title = useLoopedValues([
		'full-stack developer',
		'devops enthusiast',
		'rxjs fanboy',
		'gaming afficionado',
	], { interval });

	const threshold = height === 0 ? 0 : height - stickyHeight;

	const effectiveOffset = useMemo(() => (
		offset < 0 ? 0 : offset > threshold ? threshold : offset
	), [threshold, offset]);

	const sticky = height > 0
		? effectiveOffset >= threshold
		: false;

	const backgroundStyle = useMemo(() => ({
		transform: `translate3d(0, ${Math.round(effectiveOffset * 0.33)}px, 0)`,
	}), [effectiveOffset]);

	const contentStyle = useMemo(() => ({
		opacity: sticky ? 1 : (effectiveOffset ? (1 / threshold) * (threshold - effectiveOffset) : 1).toFixed(2),
		transform: sticky ? undefined : `translate3d(0, ${Math.round(effectiveOffset * 0.5)}px, 0)`,
	}), [effectiveOffset, sticky, threshold]);

	const classes = cn(css.container, { [css.sticky]: sticky });
	const styles = !sticky ? {} : { top: -(threshold - topOffset) };

	return (
		<section className={classes} style={styles}>
			<figure className={css.background} style={backgroundStyle} />
			<div className={css.content} style={contentStyle}>
				<h1>Chiel <span>Kunkels</span></h1>
				<Title className={css.titles} interval={interval}>{title}</Title>
			</div>
		</section>
	);
}
