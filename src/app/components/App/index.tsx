import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home';

import useStyles from './styles';

export default function App() {
	useStyles();

	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}
