import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from '../app/components/Root';

function init() {
	const el = document.getElementById('app-root');
	if (!el) return;

	hydrate(<BrowserRouter><Root /></BrowserRouter>, el, () => {
		const ssrStyles = document.getElementById('ssr-styles');
		if (ssrStyles?.parentNode) ssrStyles.parentNode.removeChild(ssrStyles);
	});
}

init();
