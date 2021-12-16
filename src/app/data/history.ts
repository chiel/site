import { ComponentType } from 'react';

import beamlyDescription from './beamly.md';
import labelADescription from './label-a.md';
import lemonadeDescription from './lemonade.md';
import lifelyDescription from './lifely.md';
import momentiveDescription from './momentive.md';
import oddJobsDescription from './odd-jobs.md';
import pokiDescription from './poki.md';
import qmetricDescription from './qmetric.md';
import spotifyDescription from './spotify.md';
import strangeloveDescription from './strangelove.md';
import travelbirdDescription from './travelbird.md';

export interface Job {
	company: string;
	role: string;
	location: string;
	start: Date;
	end: Date | Number;
	description: ComponentType;
	impact: 'major' | 'minor',
}

export const jobs: Job[] = [
	{
		company: 'Lemonade',
		role: 'Senior frontend engineer',
		location: 'Amsterdam',
		start: new Date('2021-12-01'),
		end: Infinity,
		description: lemonadeDescription,
		impact: 'major',
	},
	{
		company: 'Momentive',
		role: 'Frontend developer',
		location: 'Amsterdam',
		start: new Date('2019-02-04'),
		end: new Date('2021-11-30'),
		description: momentiveDescription,
		impact: 'major',
	},
	{
		company: 'Poki',
		role: 'Full-stack developer',
		location: 'Amsterdam',
		start: new Date('2016-07-01'),
		end: new Date('2018-12-31'),
		description: pokiDescription,
		impact: 'major',
	},
	{
		company: 'Label A',
		role: 'Lead developer',
		location: 'Amsterdam',
		start: new Date('2015-11-01'),
		end: new Date('2016-07-01'),
		description: labelADescription,
		impact: 'minor',
	},
	{
		company: 'Lifely',
		role: 'Frontend developer',
		location: 'Amsterdam',
		start: new Date('2015-04-01'),
		end: new Date('2015-11-01'),
		description: lifelyDescription,
		impact: 'minor',
	},
	{
		company: 'Strangelove',
		role: 'Front- & back-end developer',
		location: 'Amsterdam',
		start: new Date('2014-07-01'),
		end: new Date('2015-04-01'),
		description: strangeloveDescription,
		impact: 'minor',
	},
	{
		company: 'TravelBird',
		role: 'Frontend developer',
		location: 'Amsterdam',
		start: new Date('2013-10-01'),
		end: new Date('2014-04-01'),
		description: travelbirdDescription,
		impact: 'minor',
	},
	{
		company: 'Beamly',
		role: 'Full-stack developer',
		location: 'London',
		start: new Date('2012-11-01'),
		end: new Date('2013-04-01'),
		description: beamlyDescription,
		impact: 'minor',
	},
	{
		company: 'QMetric',
		role: 'Frontend developer',
		location: 'London',
		start: new Date('2012-07-01'),
		end: new Date('2012-08-01'),
		description: qmetricDescription,
		impact: 'minor',
	},
	{
		company: 'Spotify',
		role: 'Frontend developer',
		location: 'Stockholm',
		start: new Date('2010-11-01'),
		end: new Date('2012-07-01'),
		description: spotifyDescription,
		impact: 'major',
	},
	{
		company: 'Odd jobs',
		role: 'Full-stack developer',
		location: 'Amsterdam Area',
		start: new Date('2006-03-01'),
		end: new Date('2010-05-01'),
		description: oddJobsDescription,
		impact: 'minor',
	},
];
