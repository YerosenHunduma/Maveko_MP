import { Schema, model } from 'mongoose';

const quotationRequestSchema = new Schema(
    {
        products: [
            {
                code: { type: String, ref: 'Product', required: true },
                quantity_requested: { type: Number, required: true },
                price: { type: Number, default: 0 }
            }
        ],
        customer_name: { type: String, required: true },
        customer_email: { type: String, required: true },
        status: { type: String, enum: ['Pending', 'Cancled', 'Approved'], default: 'Pending' },
        otp: { type: Number },
        grandTotal: { type: Number, default: 0 }
    },
    {
        timestamps: true
    }
);

export default model('QuotationRequest', quotationRequestSchema);
