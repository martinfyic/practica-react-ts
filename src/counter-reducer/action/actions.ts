export type CounterAction =
	| { type: 'increseBy'; payload: { value: number } }
	| { type: 'decreseBy'; payload: { value: number } }
	| { type: 'reset' };

export const doIncreseBy = (value: number): CounterAction => {
	return {
		type: 'increseBy',
		payload: { value },
	};
};

export const doDecreseBy = (value: number): CounterAction => {
	return {
		type: 'decreseBy',
		payload: { value },
	};
};

export const doReset = (): CounterAction => {
	return {
		type: 'reset',
	};
};
