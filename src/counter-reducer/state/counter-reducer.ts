import { CounterAction } from '../action';
import { CounterState } from '../interfaces';

export const counterReducer = (
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
		case 'decreseBy':
			return {
				counter: counter - action.payload.value,
				previous: counter,
				changes: changes + 1,
			};

		default:
			return state;
	}
};
