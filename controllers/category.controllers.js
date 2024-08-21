import categoryModel from '../models/category.model.js';
import productsModel from '../models/products.model.js';
import { errorHandler } from '../utils/errorHandler.js';

export const newCategories = async (req, res, next) => {
    const { category, description } = req.body;
    try {
        if (!category) {
            return next(new errorHandler('Missing required fields.', 400));
        }

        if (await categoryModel.findOne({ category })) {
            return next(new errorHandler('Category already exists.', 409));
        }

        const newCategory = new categoryModel({
            category,
            description
        });

        await newCategory.save();

        res.status(201).json({ message: 'category added successfully.', newCategory });
    } catch (error) {
        next(error);
    }
};

export const getAllCategories = async (req, res, next) => {
    const { perPage } = req.query;

    const limit = perPage == 'some' ? 5 : undefined;

    try {
        const categories = await categoryModel.find().select('-__v').limit(limit);

        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};

export const getProductByCategory = async (req, res, next) => {
    const { category } = req.query;
    try {
        const products = await productsModel.find({ ancestry: { $regex: category, $options: 'i' } }).select('-__v');
        if (!products.length) {
            return next(new errorHandler('No products found in this category.', 404));
        }
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};
