import express from 'express';
import { addProduct, getProduct, getProducts } from '../controllers/products.controllers.js';

const router = express.Router();

router.post('/add-product', addProduct);
router.get('/get-all-products', getProducts);
router.get('/get-product/:id', getProduct);

export default router;
