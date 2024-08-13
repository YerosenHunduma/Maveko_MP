import mongoose from 'mongoose';

export default function connectToDb() {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGODB_URI);

        mongoose.connection.on('connected', () => {
            console.log('Connected to database successfully');
            resolve();
        });

        mongoose.connection.on('error', (err) => {
            console.error(`Error connecting to database:: ${err.message}`);
            reject(err);
        });
    });
}
