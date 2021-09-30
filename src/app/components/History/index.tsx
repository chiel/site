import React, { useState } from 'react';

import Content from '../Content';
import Timeline, { Event } from '../Timeline';

import { jobs } from './data';
import Intro from './history.md';
import useStyles from './styles';

export default function History() {
	const css = useStyles();
	const reversed = [...jobs].reverse();
	const [active, setActive] = useState(reversed.length - 1);
	const { description: Description, ...job } = reversed[active];

	const events: Event[] = reversed.map(job => ({
		date: job.start,
		label: job.company,
		size: job.impact === 'major' ? 'large' : 'small',
	}));

	function handleSelect(index: number) {
		setActive(index);
	}

	return (
		<Content>
			<Intro />
			<Timeline
				active={active}
				className={css.timeline}
				end={new Date()}
				events={events}
				start={events[0].date}
				onSelect={handleSelect}
			/>
			<h3>{job.company}</h3>
			<Description />
		</Content>
	);
}
