import { useEffect, useState } from 'react';

export function useLoopedValues(values: any[], { interval }: { interval: number }): any {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setTimeout(() => {
			let newIndex = index + 1;
			if (newIndex > values.length - 1) newIndex = 0;

			setIndex(newIndex);
		}, interval);

		return () => {
			clearTimeout(id);
		};
	}, [index]);

	return values[index];
}

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
	const [offset, setOffset] = useState(0);

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
