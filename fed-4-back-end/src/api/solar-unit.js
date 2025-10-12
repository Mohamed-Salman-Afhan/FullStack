import express from 'express';
import { createSolarUnit, getAllSolarUnits, getSolarUnitById, updateSolarUnitById, deleteSolarUnitById } from '../application/solar-unit.js';

const solarUnitRouter = express.Router();

solarUnitRouter.route('/')
  .get(getAllSolarUnits)
  .post(createSolarUnit);


  solarUnitRouter.route('/:id')
  .get(getSolarUnitById)
  .put(updateSolarUnitById)
  .delete(deleteSolarUnitById);

export default solarUnitRouter;