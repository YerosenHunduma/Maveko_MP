import { Schema, model } from 'mongoose';

const sourceSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String },
        contact_info: { phoneNumber: { type: String, unique: true }, email: { type: String, unique: true } }
    },
    { timestamps: true }
);

export default model('Source', sourceSchema);
