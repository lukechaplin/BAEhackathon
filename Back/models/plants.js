import  query  from "../db/connection.js";

export async function getAllPlants() {
  const result = await query(`SELECT * FROM plants;`);
  return result.rows;
}

export async function getPlantName(name) {
    const result = await query(`SELECT * FROM plants WHERE name ILIKE '%' || $1 || '%';`,[name]);
    return result.rows;
  }
  