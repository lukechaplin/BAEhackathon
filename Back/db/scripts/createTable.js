import query from "../connection.js";

const createTableString = "CREATE TABLE IF NOT EXISTS plants ()";

async function createPlantTable() {
  const res = await query(createTableString);
}

createPlantTable();