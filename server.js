import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDb from './Config/dbConfig.js';

dotenv.config();
const PORT = process.env.PORT || 6000;

const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    })
);

// Routes

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

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
