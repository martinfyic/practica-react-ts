import { FC, useReducer } from 'react';
import { CounterState } from './interfaces';
import { counterReducer } from './state';

const INITIAL_STATE: CounterState = {
	counter: 0,
	previous: 0,
	changes: 0,
};

export const CounterReducerComponent: FC = () => {
	const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	const stateIsCero = state.counter <= 0;
	const stateHasChanges = state.changes === 0;

	const increaseBy = (value: number) => {
		dispatch({
			type: 'increseBy',
			payload: { value },
		});
	};

	const decreseBy = (value: number) => {
		if (state.counter - value < 0) return;
		dispatch({
			type: 'decreseBy',
			payload: { value },
		});
	};

	const onReset = () => {
		dispatch({
			type: 'reset',
		});
	};

	return (
		<div>
			<h2>Counter Reducer Refactor</h2>
			<pre>{JSON.stringify(state, null, 2)}</pre>
			<div className='button_box'>
				<button onClick={() => increaseBy(1)}>+1</button>
				<button onClick={() => increaseBy(5)}>+5</button>
				<button onClick={() => increaseBy(10)}>+10</button>
				<button
					onClick={() => decreseBy(1)}
					disabled={stateIsCero}
				>
					-1
				</button>
				<button
					onClick={() => decreseBy(10)}
					disabled={state.counter < 10}
				>
					-10
				</button>
				<button
					onClick={onReset}
					disabled={stateHasChanges}
				>
					Reset
				</button>
			</div>
		</div>
	);
};
