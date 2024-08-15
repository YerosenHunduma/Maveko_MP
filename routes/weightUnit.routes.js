import express from 'express';
import { addWeightUnits, getAllWeightUnits } from '../controllers/weightUnits.controllers.js';

const router = express.Router();

router.post('/weight-unit', addWeightUnits);
router.get('/get-all-weight-unit', getAllWeightUnits);

export default router;
