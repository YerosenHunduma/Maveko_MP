import express from 'express';
import { getMyQuote, getOTP, getQuatation, getQuotationById, qouteDetails, sendQuoteResponse, submitQuotation, verifyOTP } from '../controllers/quotation.controllers.js';

const router = express.Router();

router.post('/request-quatation', submitQuotation);
router.get('/get-all-quatation', getQuatation);
router.get('/get-quatationById/:id', getQuotationById);
router.post('/respond-customer-quote', sendQuoteResponse);
router.get('/get-my-qoute', getMyQuote);
router.get('/get-qoute-detail/:id', qouteDetails);
router.post('/get-otp/:quoteId', getOTP);
router.post('/verfiy-otp', verifyOTP);

export default router;
