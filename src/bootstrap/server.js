import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet'; 
import { createServer } from 'http';
import logger from '../app/middleware/logger.middleware.js'

const app = express()
const server = createServer(app);


app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger());

app.get('/health', (req, res) =>
{
    res.status(200).json({
        success: true,
        message: 'Server is running'
    });
})

app.use("*", (req, res) => {
    throw new NotFoundError(
        `the requested route ${req.originalUrl} does not exist on this server`
    );
});

app.use(errorMiddlewaare);

export 
{
    app,
    server
}