import sourceModel from '../models/source.model.js';
import { errorHandler } from '../utils/errorHandler.js';

export const addSource = async (req, res, next) => {
    const { name, description, phoneNumber, email } = req.body;
    try {
        if (!name || !phoneNumber || !email) {
            return next(new errorHandler('Missing required fields', 400));
        }
        await new sourceModel({ name, description, contact_info: { phoneNumber, email } }).save();
        res.status(201).json({ message: 'source registered successfully' });
    } catch (error) {
        next(error);
    }
};
