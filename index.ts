import express, {Request, Response, NextFunction} from 'express';
import cookieParser from 'cookie-parser';
import morgan from "morgan";
import helmet from "helmet";
import cors from 'cors';


import 'dotenv/config';

export const app = express();

// body parser
app.use(helmet());
app.use(express.json({limit: "50mb"}));
app.use(morgan("dev"));

// cookie parser
app.use(cookieParser());

// cors => cross origin resource sharing
app.use(cors({
    origin: process.env.ORIGIN
}));

// testing api
app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        message: 'API is working fine!'
    });
});

// all api
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
});

// Starting the Server    
const PORT = process.env.PORT || 4000 ;

// Run server
app.listen(PORT, () => {
    console.log(`Server is connected with port ${PORT}`);
});