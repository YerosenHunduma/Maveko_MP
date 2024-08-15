import express from 'express';
import { getAllCategories, newCategories } from '../controllers/category.controllers.js';

const router = express.Router();

router.post('/new-category', newCategories);
router.get('/get-all-categories', getAllCategories);

export default router;
