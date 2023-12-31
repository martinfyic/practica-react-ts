import { FC, useLayoutEffect, useRef, useState } from 'react';
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

export const CounterEffect: FC = () => {
	const [counter, setCounter] = useState<number>(LIMIT_COUNT.INITIAL);
	const counterElement = useRef<HTMLHeadingElement>(null);

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
		if (counter < LIMIT_COUNT.MAXIMUM) return;
		console.log(
			'%cLlegaste al maximo',
			'color: yellow; background-color: black;'
		);

		const tl = gsap.timeline();
		tl.to(counterElement.current, {
			y: -20,
			duration: 0.3,
			ease: 'ease.out',
		}).to(counterElement.current, {
			y: 0,
			duration: 0.8,
			ease: 'bounce.out',
		});
	}, [counter]);

	return (
		<div>
			<section className='title_area_counters'>
				<h2>CounterEffect: </h2>
				<h2 ref={counterElement}>{counter}</h2>
			</section>
			<div className='button_box'>
				<button
					onClick={increment}
					disabled={maximumCount}
				>
					Increment +1
				</button>
				<button
					onClick={resetCounter}
					disabled={equalThaninitialValue}
				>
					Reset
				</button>
				<button
					onClick={decrement}
					disabled={minimumCount}
				>
					Decrement -1
				</button>
			</div>
		</div>
	);
};
