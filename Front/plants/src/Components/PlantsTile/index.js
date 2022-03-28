import React from 'react';

function PlantsTile({ data }) {
	return (
		<div>
			<h2>{data.name}</h2>
			<img src={data.image} alt={data.name} />

			<p>Watering: {data.watering}</p>
			<p>Sunlight: {data.sunlight}</p>
			<p>Care Notes: {data.description}</p>
		</div>
	);
}

export default PlantsTile;
