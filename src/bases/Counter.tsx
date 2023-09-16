import { FC, useState } from 'react';

interface CounterProps {
	initialValue: number;
}

export const Counter: FC<CounterProps> = ({ initialValue }) => {
	const [counter, setCounter] = useState(initialValue);

	const increment = () => {
		setCounter(prev => prev + 1);
	};

	const decrement = () => {
		if (counter === 0) return;
		setCounter(prev => prev - 1);
	};

	const resetCounter = () => {
		setCounter(initialValue);
	};

	const equalThaninitialValue = counter === initialValue;
	const lessThanZero = counter <= 0;

	return (
		<div>
			<h2>Counter: {counter}</h2>
			<div className='button_box'>
				<button onClick={increment}>Increment +1</button>
				<button
					onClick={resetCounter}
					disabled={equalThaninitialValue}
				>
					Reset
				</button>
				<button
					onClick={decrement}
					disabled={lessThanZero}
				>
					Decrement -1
				</button>
			</div>
		</div>
	);
};
