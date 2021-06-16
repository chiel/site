import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';

export default function renderDocument(component: React.ReactElement): string {
	const sheets = new SheetsRegistry();
	const markup = renderToString(<JssProvider registry={sheets}>{component}</JssProvider>);

	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>Chiel Kunkels</title>
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Ubuntu:wght@700&display=swap">
		<style id="ssr-styles">${sheets.toString()}</style>
	</head>
	<body>
		<div id="app-root">${markup}</div>
		<script src="/assets/index.js"></script>
	</body>
</html>`;
}
