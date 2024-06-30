import { getUser, register, login } from '@mobula/controller';
import * as express from 'express';
const router = express.Router();

router.get('/user', getUser);
router.post('/register', register);
router.post('/login', login);

export default router;
