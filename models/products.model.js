import { Schema, model } from 'mongoose';

const productsSchema = new Schema(
    {
        code: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        description: String,
        customs_description: String,
        leaf: { type: Boolean, default: true, required: true },
        ancestry: { type: String, default: '' },
        productImg: { type: String, default: 'https://cdn.goodao.net/ccmrolling/nwqqnhm1htl.jpg' },
        preferred_units: {
            type: String,
            required: true,
            enum: ['pieces', 'dozens', 'kilograms', 'grams', 'pounds', 'ounce', 'tonnes', 'meters', 'centimeters', 'inches', 'liters', 'milliliters', 'gallons', 'Square Meter'],
            default: 'Kilogram',
            required: true
        },
        weight: { type: Number },
        weight_unit_id: { type: Schema.Types.ObjectId, ref: 'WeightUnit' },
        dimensions: {
            length: Number,
            width: Number,
            height: Number
        },
        hs_code: { type: String },
        hs_description: { type: String },
        source_id: { type: Schema.Types.ObjectId, ref: 'Source' }
    },
    {
        timestamps: true
    }
);

productsSchema.index({ ancestry: 1 });
productsSchema.index({ code: 1 }, { unique: true });
productsSchema.index({ source_id: 1 });
productsSchema.index({ weight_unit_id: 1 });

export default model('Product', productsSchema);
