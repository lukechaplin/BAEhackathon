import { useState } from 'react';
import PlantsTile from '../PlantsTile';
import SearchBar from '../SearchBar';
import css from "./App.module.css"
import Footer from '../Footer'

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
		setData(receivedData.payload);
	}

	return (
		<div className={css.app}>
			<h1>Save My Plants!</h1>
			<SearchBar submitInfo={submitInfo} getWord={getWord} />
			{data ? data.map((element) => <PlantsTile data={element} key={element.name} />) : <div />}
			<Footer />
		</div>
	);
}

export default App;
