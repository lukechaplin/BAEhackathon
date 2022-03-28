import React from 'react';
import css from "./PlantsTile.module.css"

function PlantsTile({ data }) {
	return (
		<div className={css.plantsContainer}>
			<h2>{data.name}</h2>
			<div className={css.imageContainer}>
			<img src={data.image} alt={data.name} />

			</div>

			<p>Watering: {data.watering}</p>
			<p>Sunlight: {data.sunlight}</p>
			<p>Care Notes: {data.description}</p>
		</div>
	);
}

export default PlantsTile;
