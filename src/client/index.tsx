import React from 'react';
import { hydrate } from 'react-dom';

import Root from '../app/components/Root';

function init() {
	const el = document.getElementById('app-root');
	if (!el) return;

	hydrate(<Root />, el, () => {
		const ssrStyles = document.getElementById('ssr-styles');
		if (ssrStyles?.parentNode) ssrStyles.parentNode.removeChild(ssrStyles);
	});
}

init();
