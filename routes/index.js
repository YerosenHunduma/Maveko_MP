import express from 'express';
import productRoutes from './product.routes.js';
import weightUnitsRoutes from './weightUnit.routes.js';
import categoryRoutes from './category.routes.js';
import sourceRoutes from './source.routes.js';
import quatationRoutes from './quotation.routes.js';
import globalErrorHandler from '../middlewares/globalErrorHandler.js';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/weight', weightUnitsRoutes);
router.use('/category', categoryRoutes);
router.use('/source', sourceRoutes);
router.use('/quatation', quatationRoutes);

router.use(globalErrorHandler);

export default router;
