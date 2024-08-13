import { Schema, model } from 'mongoose';

const productsSchema = new Schema(
    {
        code: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        description: String,
        customs_description: String,
        leaf: { type: Boolean, default: true, required: true },
        ancestry: { type: String, default: '' },
        preferred_units: { type: [String], default: [], required: true },
        weight: { type: Number },
        weight_unit_id: { type: mongoose.Schema.Types.ObjectId, ref: 'WeightUnit' },
        dimensions: { type: String },
        hs_code: { type: String },
        hs_description: { type: String },
        source_id: { type: Schema.Types.ObjectId, ref: 'Source' }
    },
    {
        timestamps: true
    }
);

export default model('Product', productsSchema);
