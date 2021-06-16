import React, { useMemo } from 'react';

import { useScrollOffset, useViewportHeight } from './hooks';
import useStyles from './styles';

export default function Masthead() {
	const css = useStyles();
	const height = useViewportHeight();
	const offset = useScrollOffset();

	const effectiveOffset = useMemo(() => (
		offset < 0 ? 0 : offset > height ? height : offset
	), [height, offset]);

	const backgroundStyle = useMemo(() => ({
		transform: `translate3d(0, ${Math.round(effectiveOffset * 0.33)}px, 0)`,
	}), [effectiveOffset]);

	const contentStyle = useMemo(() => ({
		opacity: (effectiveOffset ? (1 / height) * (height - effectiveOffset) : 1).toFixed(2),
		transform: `translate3d(0, ${Math.round(effectiveOffset * 0.5)}px, 0)`,
	}), [height, effectiveOffset]);

	return (
		<section className={css.container}>
			<figure className={css.background} style={backgroundStyle} />
			<div className={css.content} style={contentStyle}>
				<h1>Chiel <span>Kunkels</span></h1>
				<div className={css.titles}>
					<p>Full-stack developer</p>
				</div>
			</div>
		</section>
	);
}
