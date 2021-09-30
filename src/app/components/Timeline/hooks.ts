import { useEffect, useState } from 'react';

interface State {
	visible: boolean;
	width: number;
}

export function useIntersection(el?: HTMLDivElement | null): State {
	const [state, setState] = useState<State>({
		visible: false,
		width: 0,
	});

	useEffect(() => {
		if (!el) return;

		const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
			const entry = entries.find(entry => entry.target === el);
			if (!entry) return;

			setState(s => s.visible ? s : {
				visible: s.visible || entry.isIntersecting,
				width: entry.boundingClientRect.width,
			});
		}, {
			root: null,
			rootMargin: '-100px 0px -100px 0px',
			threshold: 1,
		});

		observer.observe(el);
	}, [el]);

	useEffect(() => {
		function handleResize() {
			if (!el) return;

			const { width } = el?.getBoundingClientRect();
			setState(s => width === s.width ? s : { ...s, width });
		}

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [el]);

	return state;
}
