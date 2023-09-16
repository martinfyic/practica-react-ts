import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface ILimitCounts {
	MAXIMUM: 10;
	MINIMUM: 0;
	INITIAL: number;
}

const LIMIT_COUNT: ILimitCounts = {
	MAXIMUM: 10,
	MINIMUM: 0,
	INITIAL: 0,
};

export const useCounter = () => {
	const [counter, setCounter] = useState<number>(LIMIT_COUNT.INITIAL);
	const elementToAnimate = useRef<HTMLHeadingElement>(null);

	const tl = useRef(gsap.timeline());

	const increment = () => {
		setCounter(prev => Math.min(prev + 1, LIMIT_COUNT.MAXIMUM));
	};

	const decrement = () => {
		// if (counter === LIMIT_COUNT.MINIMUM) return;
		setCounter(prev => Math.max(prev - 1, LIMIT_COUNT.MINIMUM));
	};

	const resetCounter = () => {
		setCounter(LIMIT_COUNT.INITIAL);
	};

	const equalThaninitialValue = counter === LIMIT_COUNT.INITIAL;
	const maximumCount = counter >= LIMIT_COUNT.MAXIMUM;
	const minimumCount = counter <= LIMIT_COUNT.MINIMUM;

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
		if (counter > LIMIT_COUNT.MAXIMUM) return;
		tl.current.play(0);
	}, [counter]);

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
