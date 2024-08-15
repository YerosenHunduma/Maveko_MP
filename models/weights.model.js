import { Schema, model } from 'mongoose';

const weightUnitSchema = new Schema(
    {
        unit: { type: String, required: true, unique: true },
        abbreviation: { type: String, required: true, unique: true }
    },
    { timestamps: true }
);

export default model('WeightUnit', weightUnitSchema);
