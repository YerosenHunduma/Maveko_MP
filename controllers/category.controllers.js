import categoryModel from '../models/category.model.js';
import { errorHandler } from '../utils/errorHandler.js';

export const newCategories = async (req, res, next) => {
    const { category } = req.body;
    try {
        if (!category) {
            return next(new errorHandler('Missing required fields.', 400));
        }

        const newCategory = new categoryModel({
            category
        });

        await newCategory.save();

        res.status(201).json({ message: 'category added successfully.', newCategory });
    } catch (error) {
        next(error);
    }
};

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await categoryModel.find().select('category');
        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};
