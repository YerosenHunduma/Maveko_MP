import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
    {
        category: { type: String, required: true, unique: true },
        description: { type: String },
        categoryImg: {
            type: String,
            default: 'https://static.scientificamerican.com/sciam/cache/file/BC2412FA-1388-43B7-877759A80E201C16_source.jpg'
        }
    },
    { timestamps: true }
);

export default model('Category', categorySchema);
