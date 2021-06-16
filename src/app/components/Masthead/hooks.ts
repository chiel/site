import { useEffect, useState } from 'react';

export function useViewportHeight() {
	const initialHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
	const [height, setHeight] = useState(initialHeight);

	useEffect(() => {
		function handleResize() {
			setHeight(window.innerHeight);
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return height;
}

export function useScrollOffset() {
	const initialOffset = typeof window !== 'undefined' ? window.pageYOffset : 0;
	const [offset, setOffset] = useState(initialOffset);

	useEffect(() => {
		function handleScroll() {
			setOffset(pageYOffset);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return offset;
}
