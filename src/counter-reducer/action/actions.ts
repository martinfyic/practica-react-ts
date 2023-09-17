export type CounterAction =
	| { type: 'increseBy'; payload: { value: number } }
	| { type: 'decreseBy'; payload: { value: number } }
	| { type: 'reset' };
