import compression from 'compression';
import cors from 'cors';
import express, {Express} from 'express';
import helmet from 'helmet';
import config from '../config';
import {router} from './router';

export async function createApp(): Promise<Express> {
    const app: Express = express();

    app.use(helmet());
    app.use(compression());
    app.use(cors(config.corsOptions), router);

    return app;
}