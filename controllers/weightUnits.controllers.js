import { errorHandler } from '../utils/errorHandler.js';
import weightsUnits from '../models/weights.model.js';
export const addWeightUnits = async (req, res, next) => {
    const { unit, abbreviation } = req.body;
    try {
        if (!unit || !abbreviation) {
            return next(new errorHandler('Missing required fields.', 400));
        }

        await new weightsUnits({
            unit,
            abbreviation
        }).save();

        res.status(201).json({ message: 'Weight unit added successfully.', weightsUnits });
    } catch (error) {
        next(error);
    }
};

export const getAllWeightUnits = async (req, res, next) => {
    try {
        const weightUnits = await weightsUnits.find();
        res.json(weightUnits);
    } catch (error) {
        next(error);
    }
};
