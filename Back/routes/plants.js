import express from "express";
import {getAllPlants, getPlantName} from '../models/plants.js'
const router = express.Router();

/* GET plants listing. */
router.get('/', async function (req, res) {
  const { name } = req.query;

  if (name) {
    const reqName = await getPlantName(name);
    return res.json({
      payload: reqName,
    });
  }
  const allPlants = await getAllPlants();
  res.json({
    payload: allPlants,
  });
});


export default router;