import React from 'react';
import css from "./PlantsTile.module.css"

function PlantsTile({ data }) {
	return (
		<div className={css.plantsContainer}>
			<h2>{data.name}</h2>
			<div className={css.imageContainer}>
			<img src={data.image} alt={data.name} />

			</div>

			<p><span className={css.title}>Watering: </span>{data.watering}</p>
			<p><span className={css.title}>Sunlight: </span>{data.sunlight}</p>
			<p><span className={css.title}>Care Notes: </span>{data.description}</p>
		</div>
	);
}

export default PlantsTile;
