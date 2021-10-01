import cn from 'classnames';
import { differenceInDays } from 'date-fns';
import React, { useState } from 'react';

import { useIntersection } from './hooks';
import useStyles, { lineAnimationDuration } from './styles';

export interface Event {
	date: Date;
	label: string;
	size: string;
};

interface Props {
	active: number;
	className?: string;
	end: Date;
	events: Event[];
	start: Date;
	onSelect: (n: number) => void;
}

export default function Timeline({ active, className, end, events, start, onSelect }: Props) {
	const css = useStyles();
	const [el, setEl] = useState<HTMLDivElement | null>();
	const { visible, width } = useIntersection(el);

	const offset = 60;
	const diff = differenceInDays(end, start);
	const widthPerDay = (width - (offset * 2)) / diff;

	function handleClick(ev: React.MouseEvent<HTMLButtonElement>) {
		const { index } = ev.currentTarget.dataset;
		if (!index) return;

		onSelect(parseInt(index, 10));
	}

	return (
		<div ref={setEl} className={cn(css.container, className)}>
			<div className={cn(css.inner, { [css.hidden]: !visible })}>
				{events.map((event, i) => (
					<button
						key={event.label}
						type="button"
						className={cn(
							css.node,
							event.size === 'large' ? css.large : css.small,
							{ [css.active]: i === active },
						)}
						style={{
							animationDelay: `${lineAnimationDuration + (i * 200)}ms`,
							left: Math.round(differenceInDays(event.date, start) * widthPerDay) + offset,
						}}
						data-index={i}
						onClick={handleClick}
					>
						{event.label}
					</button>
				))}
			</div>
		</div>
	);
}
