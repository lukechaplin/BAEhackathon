import { useState } from 'react';
import SearchBar from '../SearchBar';

function App() {
	const [ search, setSearch ] = useState();
	const [ data, setData ] = useState();

	function getWord(e) {
		setSearch(e.target.value);
	}

	async function submitInfo() {
		const response = await fetch('');
		const recievedData = await response.json();
		setData(recievedData);
	}

	return (
		<div>
			<h1>Save My Plants!</h1>
			<SearchBar submitInfo={submitInfo} getWord={getWord} />
		</div>
	);
}

export default App;
