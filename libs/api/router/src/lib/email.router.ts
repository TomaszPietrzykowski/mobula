import { getEmail } from '@mobula/controller';
import * as express from 'express';
const router = express.Router();

router.get('/', getEmail);

export default router;
