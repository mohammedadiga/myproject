import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config'


export const app = express()

app.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);
});