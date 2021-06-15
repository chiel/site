import React from 'react';
import { renderToString } from 'react-dom/server';

export default function renderDocument(component: React.ReactElement): string {
	const markup = renderToString(component);

	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>Chiel Kunkels</title>
	</head>
	<body>
		<div id="app-root">${markup}</div>
	</body>
</html>`;
}
