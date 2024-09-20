import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDb from './Config/dbConfig.js';
import routes from './routes/index.js';

dotenv.config();
const PORT = process.env.PORT || 6000;

const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: ['http://localhost:5173', 'https://maveko.vercel.app'],
        credentials: true
    })
);

// Routes
app.use('/api', routes);

// Start the server

connectToDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error.message);
    });
