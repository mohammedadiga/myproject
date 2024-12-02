import express, {Request, Response, Nextfunction} from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import 'dotenv/config';

export const app = express();

// body parser 
app.use(express.json({limit: "50mb"}));

// cookie parser
app.use(cookieParser());

// cors => cross origin resource sharing
app.use(cors({
    origin: process.env.ORIGIN
}));

// testing api
app.get('/test', (req: Request, res: Response, next: Nextfunction) => {
    res.status(200).json({
        success: true,
        message: 'API is working fine!'
    });
});

// all api
app.all('*', (req: Request, res: Response, next: Nextfunction) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
});

// Run server
app.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);
});