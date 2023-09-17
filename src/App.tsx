import './App.css';
import {
	Counter,
	CounterBy,
	CounterEffect,
	CounterHook,
	CounterReducerComponent,
} from './bases';

function App() {
	return (
		<>
			<h1>React + TypeScrypt 🚀</h1>
			<hr />
			<Counter initialValue={0} />
			<hr />
			<CounterBy initialValue={0} />
			<hr />
			<CounterEffect />
			<hr />
			<CounterHook />
			<hr />
			<CounterReducerComponent />
		</>
	);
}

export default App;
