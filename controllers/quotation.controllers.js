import productsModel from '../models/products.model.js';
import quotationModel from '../models/quotation.model.js';
import { errorHandler } from '../utils/errorHandler.js';
import { getQuotationTemplate } from '../utils/getQuotationTemplate.js';
import { sendMail } from '../utils/sendMaill.js';

export const submitQuotation = async (req, res, next) => {
    try {
        const { name, email, products } = req.body;

        if (!name || !email || !products || products.length === 0) {
            return next(new errorHandler('Invalid request data', 400));
        }

        const productEntries = products.map((product) => ({
            code: product.code,
            quantity_requested: product.quantity
        }));

        const newQuotationRequest = new quotationModel({
            customer_name: name,
            customer_email: email,
            products: productEntries,
            otp: Math.floor(100000 + Math.random() * 900000),
            otp_expires_at: new Date(Date.now() + 10 * 60 * 1000)
        });

        await newQuotationRequest.save();

        const followUpLink = `${process.env.CLIENT_URL}/${newQuotationRequest._id}`;

        await sendMail({
            email,
            subject: 'New Quotation',
            message: getQuotationTemplate(name, followUpLink, newQuotationRequest.otp)
        });

        res.status(201).json({ success: true, message: 'Quotation request created successfully', newQuotationRequest });
    } catch (error) {
        next(error);
    }
};

export const getQuatation = async (req, res, next) => {
    try {
        const quatations = await quotationModel.find({}).select('-__v');
        res.status(200).json({ success: true, quatations });
    } catch (error) {
        next(error);
    }
};

export const getQuotationById = async (req, res, next) => {
    try {
        const quotation = await quotationModel.findById(req.params.id).select('-__v, -otp, -otp_expires_at');
        if (!quotation) {
            return next(new errorHandler('Quotation not found', 404));
        }

        const products = await Promise.all(
            quotation.products.map(async (product) => {
                const productDetails = await productsModel.findOne({ code: product.code }).select('-__v');
                return {
                    ...product.toObject(),
                    productDetails
                };
            })
        );

        res.status(200).json({ success: true, quotation: { ...quotation._doc, products } });
    } catch (error) {
        next(error);
    }
};

export const sendQuoteResponse = async (req, res, next) => {
    const { data } = req.body;
    try {
        const quote = await quotationModel.findById(data.id);

        if (!quote) {
            return next(new errorHandler('Quotation not found', 404));
        }
        quote.grandTotal = data.grandTotal;
        quote.status = 'Approved';

        quote.products.forEach((p) => {
            if (data.prices[p._id]) {
                p.price = data.prices[p._id];
            }
        });

        await quote.save();

        res.status(200).json({ success: true, message: 'Quote response sent successfully' });
    } catch (error) {
        next(error);
    }
};

export const getMyQuote = async (req, res, next) => {
    try {
        const { email } = req.query;

        if (!email) {
            return next(new errorHandler('Invalid request data', 400));
        }
        const myQuotes = await quotationModel.find({ customer_email: email }).select('-__v');
        if (!myQuotes) {
            return next(new errorHandler("Couldn't find", 404));
        }
        res.status(200).json({ success: true, myQuotes });
    } catch (error) {
        next(error);
    }
};

export const qouteDetails = async (req, res, next) => {
    const { id } = req.params;

    try {
        const quote = await quotationModel.findById(id).select('-__v');
        if (!quote) {
            return next(new errorHandler("Couldn't find", 404));
        }

        const products = await Promise.all(
            quote.products.map(async (product) => {
                const productDetails = await productsModel.findOne({ code: product.code }).select('-__v');
                return {
                    ...product.toObject(),
                    productDetails
                };
            })
        );

        res.status(200).json({ success: true, quote: { ...quote._doc, products } });
    } catch (error) {
        next(error);
    }
};
