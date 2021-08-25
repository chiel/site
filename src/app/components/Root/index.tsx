import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { ThemeProvider } from 'react-jss';

import theme from '../../theme';
import App from '../App';
import CodeBlock from '../CodeBlock';

const components = {
	pre: (props: any) => <div {...props} />,
	code: (props: any) => <CodeBlock {...props} />,
};

export default function Root() {
	return (
		<ThemeProvider theme={theme}>
			<MDXProvider components={components}>
				<App />
			</MDXProvider>
		</ThemeProvider>
	);
}
