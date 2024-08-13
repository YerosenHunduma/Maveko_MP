import { Schema, model } from 'mongoose';

const quotationRequestSchema = new Schema(
    {
        product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        customer_name: { type: String, required: true },
        customer_email: { type: String, required: true },
        quantity_requested: { type: Number, required: true },
        message: { type: String },
        status: { type: String, enum: ['Pending', 'Cancled', 'Approved'], default: 'Pending' },
        otp: { type: String, default: 'Pending' },
        otp_expires_at: { type: Date, required: true }
    },
    {
        timestamps: true
    }
);

export default model('QuotationRequest', quotationRequestSchema);
