import express from 'express';
import { addSource } from '../controllers/source.controllers.js';

const router = express.Router();

router.post('/source-register', addSource);

export default router;
