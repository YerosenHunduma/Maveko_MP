import express from 'express';
import { getMyQuote, getQuatation, getQuotationById, sendQuoteResponse, submitQuotation } from '../controllers/quotation.controllers.js';

const router = express.Router();

router.post('/request-quatation', submitQuotation);
router.get('/get-all-quatation', getQuatation);
router.get('/get-quatationById/:id', getQuotationById);
router.post('/respond-customer-quote', sendQuoteResponse);
router.get('/get-my-qoute', getMyQuote);

export default router;
