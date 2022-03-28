import query from "../connection.js";

const createTableString = "CREATE TABLE IF NOT EXISTS plants (id SERIAL PRIMARY KEY, name TEXT, image TEXT, watering TEXT, sunlight TEXT, description TEXT)";

async function createPlantTable() {
  const res = await query(createTableString);
}

createPlantTable();