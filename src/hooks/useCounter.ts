import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({
	maxCounter = 10,
	initialCounter = 0,
	minCounter = 0,
}) => {
	const [counter, setCounter] = useState<number>(initialCounter);
	const elementToAnimate = useRef<HTMLHeadingElement>(null);

	const tl = useRef(gsap.timeline());

	const increment = () => {
		setCounter(prev => Math.min(prev + 1, maxCounter));
	};

	const decrement = () => {
		// if (counter === minCounter) return;
		setCounter(prev => Math.max(prev - 1, minCounter));
	};

	const resetCounter = () => {
		setCounter(initialCounter);
	};

	const equalThaninitialValue = counter === initialCounter;
	const maximumCount = counter >= maxCounter;
	const minimumCount = counter <= minCounter;

	useLayoutEffect(() => {
		if (!elementToAnimate.current) return;

		tl.current
			.to(elementToAnimate.current, {
				y: -10,
				duration: 0.2,
				ease: 'ease.out',
			})
			.to(elementToAnimate.current, {
				y: 0,
				duration: 0.5,
				ease: 'bounce.out',
			})
			.pause();
	}, []);

	useEffect(() => {
		if (counter > maxCounter) return;
		tl.current.play(0);
	}, [counter, maxCounter]);

	return {
		counter,
		decrement,
		elementToAnimate,
		equalThaninitialValue,
		increment,
		maximumCount,
		minimumCount,
		resetCounter,
	};
};
