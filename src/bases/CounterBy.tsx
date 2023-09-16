import { FC, useState } from 'react';

interface CounterByProps {
	initialValue?: number;
}

interface CounterState {
	counter: number;
	clicks: number;
}

export const CounterBy: FC<CounterByProps> = ({ initialValue = 0 }) => {
	const [{ clicks, counter }, setCounter] = useState<CounterState>({
		counter: initialValue,
		clicks: 0,
	});

	const incrementBy = (value: number) => {
		setCounter(({ clicks, counter }) => ({
			counter: counter + value,
			clicks: clicks + 1,
		}));
	};

	const resetCounter = () => {
		setCounter({
			counter: initialValue,
			clicks: 0,
		});
	};

	const equalThaninitialValue = counter === initialValue;

	return (
		<div>
			<section className='title_area_counters'>
				<h2>CounterBy: {counter}</h2>
				<h2>Clicks: {clicks}</h2>
			</section>
			<div className='button_box'>
				<button onClick={() => incrementBy(1)}>Increment +1</button>
				<button onClick={() => incrementBy(5)}>Increment +5</button>
				<button
					onClick={resetCounter}
					disabled={equalThaninitialValue}
				>
					Reset
				</button>
			</div>
		</div>
	);
};
