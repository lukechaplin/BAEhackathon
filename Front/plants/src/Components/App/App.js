import { useState } from 'react';
import PlantsTile from '../PlantsTile';
import SearchBar from '../SearchBar';

function App() {
	const [ search, setSearch ] = useState();
	const [ data, setData ] = useState();

	function getWord(e) {
		setSearch(e.target.value);
	}

	async function submitInfo(e) {
		e.preventDefault();

		const response = await fetch(`http://localhost:3001/plants?name=${search}`);

		const receivedData = await response.json();
		console.log('receivedData', receivedData);
		setData(receivedData.payload);
		console.log(data, 'data');
	}

	return (
		<div>
			<h1>Save My Plants!</h1>

			<SearchBar submitInfo={submitInfo} getWord={getWord} />
			{data ? data.map((element) => <PlantsTile data={element} />) : <div />}
		</div>
	);
}

export default App;
