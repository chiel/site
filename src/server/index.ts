import 'source-map-support/register';

import express from 'express';

import { renderDocument } from './utils';

const app = express();
app.disable('x-powered-by');

app.get('/favicon.ico', (_req, res) => {
	res.status(404).end();
});

app.get('*', (_req, res) => {
	const markup = renderDocument('<p>Hello world.</p>');
	res.send(markup);
});

const port = 7268;
const srv = app.listen(port, () => {
	console.info(`Server listening on :${port}`);
});

function shutdown() {
	srv.close();
	process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
