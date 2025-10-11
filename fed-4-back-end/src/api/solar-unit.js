import express from 'express';
import { createSolarUnit, getAllSolarUnits, getSolarUnitById } from '../application/solar-unit.js';

const solarUnitRouter = express.Router();

solarUnitRouter.route('/')
  .get(getAllSolarUnits)
  .post(createSolarUnit);


  solarUnitRouter.route('/:id')
  .get(getSolarUnitById);
//   .put()
//   .delete();

export default solarUnitRouter;