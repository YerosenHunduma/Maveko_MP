import express from 'express';
import { getAllCategories, getProductByCategory, newCategories } from '../controllers/category.controllers.js';

const router = express.Router();

router.post('/new-category', newCategories);
router.get('/get-all-categories', getAllCategories);
router.get('/getCategory-product', getProductByCategory);

export default router;
