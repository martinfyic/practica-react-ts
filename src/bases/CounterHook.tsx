import { FC } from 'react';
import { useCounter } from '../hooks';

export const CounterHook: FC = () => {
	const {
		counter,
		counterElement,
		decrement,
		equalThaninitialValue,
		increment,
		maximumCount,
		minimumCount,
		resetCounter,
	} = useCounter();

	return (
		<div>
			<section className='title_area_counters'>
				<h2>CounterHook: </h2>
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
