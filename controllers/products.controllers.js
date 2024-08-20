import productsModel from '../models/products.model.js';
import { apiFilter } from '../utils/apiFilters.js';
import { errorHandler } from '../utils/errorHandler.js';

export const addProduct = async (req, res, next) => {
    const { code, name, description, customs_description, leaf, ancestry, preferred_units, weight, weight_unit_id, length, height, width, hs_code, hs_description, source_id } = req.body;
    try {
        if (!code || !name || !description || !preferred_units || !weight || !weight_unit_id || !source_id) {
            return next(new errorHandler('Missing required fields.', 400));
        }

        // Add product to the database
        await new productsModel({
            code,
            name,
            description,
            customs_description,
            leaf,
            ancestry,
            preferred_units,
            weight,
            weight_unit_id,
            dimensions: {
                length,
                height,
                width
            },
            hs_code,
            hs_description,
            source_id
        }).save();

        res.status(201).json({ message: 'Product added successfully.' });
    } catch (error) {
        next(error);
    }
};

export const getProducts = async (req, res, next) => {
    const resPerPage = 8;

    try {
        const prodApiFilter = new apiFilter(productsModel, req.query).search();

        let products = await prodApiFilter.query;
        const filteredProductCount = products.length;

        prodApiFilter.pagination(resPerPage);

        products = await prodApiFilter.query.clone();

        res.status(200).json({ resPerPage, filteredProductCount, products });
    } catch (error) {
        next(error);
    }
};

export const getProduct = async (req, res, next) => {
    try {
        const product = await productsModel.findById(req.params.id).select('-__v');
        if (!product) {
            return next(new errorHandler('Product not found.', 404));
        }
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};
