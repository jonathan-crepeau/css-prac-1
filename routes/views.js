import express from 'express';
const router = express.Router();
import { root, test } from '../controllers/Views';
router.get('/', root);
router.get('/test', test);
export { router };
