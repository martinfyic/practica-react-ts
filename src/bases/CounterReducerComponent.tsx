import { FC, useReducer } from 'react';

interface CounterState {
	counter: number;
	previous: number;
	changes: number;
}

const INITIAL_STATE: CounterState = {
	counter: 0,
	previous: 0,
	changes: 0,
};

type CounterAction =
	| { type: 'increseBy'; payload: { value: number } }
	| { type: 'reset' };

const counterReducer = (
	state: CounterState,
	action: CounterAction
): CounterState => {
	const { changes, counter } = state;

	switch (action.type) {
		case 'reset':
			return {
				counter: 0,
				previous: 0,
				changes: 0,
			};
		case 'increseBy':
			return {
				counter: counter + action.payload.value,
				previous: counter,
				changes: changes + 1,
			};

		default:
			return state;
	}
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

	const onReset = () => {
		dispatch({
			type: 'reset',
		});
	};

	return (
		<div>
			<h2>Counter Reducer: {state.counter}</h2>
			<pre>{JSON.stringify(state, null, 2)}</pre>
			<div className='button_box'>
				<button onClick={() => increaseBy(1)}>+1</button>
				<button onClick={() => increaseBy(5)}>+5</button>
				<button onClick={() => increaseBy(10)}>+10</button>
				<button
					onClick={() => increaseBy(-1)}
					disabled={stateIsCero}
				>
					-1
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
