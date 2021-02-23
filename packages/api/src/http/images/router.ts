import {Router} from 'express';
import {searchByTag} from './searchByTag';

const router: Router = Router();
router.get('/tag/:tag/:page([0-9]+)?', searchByTag);

export default router;