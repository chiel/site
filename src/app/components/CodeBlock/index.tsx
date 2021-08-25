import cn from 'classnames';
import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';

import useStyles from './styles';

interface Props {
	children: string;
	className: string;
}

export default function CodeBlock({ children, className }: Props) {
	const css = useStyles();

	const language = className.replace(/language-/, '');
	const code = children.replace(/^\s*|\s*$/g, '');

	return (
		<Highlight {...defaultProps} code={code} language={language as Language} theme={github}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={cn(className, css.container)} style={style}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}
