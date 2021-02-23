import {Router} from 'express';
import imagesRouter from './images/router';

export const router: Router = Router();
router.use('/images', imagesRouter);