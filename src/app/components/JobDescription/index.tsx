import { format, formatDuration, intervalToDuration } from 'date-fns';
import React from 'react';

import { Job } from '../../data/history';

import useStyles from './styles';

interface Props {
	job: Job;
}

export default function JobDescription({
	job: { description: Description, ...job },
}: Props) {
	const css = useStyles();
	// console.log('JOB', job);

	const interval = intervalToDuration({
		start: job.start,
		end: job.end === Infinity ? new Date : job.end as Date,
	});

	const duration = formatDuration(interval, {
		format: ['years', 'months'],
	});

	return (
		<React.Fragment>
			<header className={css.header}>
				<h3>{job.company}</h3>
				<p className={css.date}>
					(
						{format(job.start, 'MMM yyyy')}
						&mdash;
						{job.end === Infinity ? 'present' : format(job.end as Date, 'MMM yyyy')}
						, {duration}
					)
				</p>
			</header>
			<Description />
		</React.Fragment>
	);
}
