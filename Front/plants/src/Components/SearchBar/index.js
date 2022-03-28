import React from 'react';

function SearchBar({ getWord }) {
	return (
		<form onSubmit={submitInfo}>
			<input type="text" placeholder="Search for a plant..." onChange={getWord} />
			<input type="submit" />
		</form>
	);
}
export default SearchBar;
