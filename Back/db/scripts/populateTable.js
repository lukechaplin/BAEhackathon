import query from "../connection.js";

const plantsData = {

}

async function populatePlantsTable() {
    for (let i = 0; i < plantsData.length; i++) {
      const name = plantsData[i].name;
      
      const res = await query(
        `INSERT INTO plants () VALUES($1)`,
        []
      );
     }
  }
  
  populatePlantsTable();