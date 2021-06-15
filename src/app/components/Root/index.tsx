import React from 'react';
import { ThemeProvider } from 'react-jss';

import theme from '../../theme';
import App from '../App';

export default function Root() {
	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
}
