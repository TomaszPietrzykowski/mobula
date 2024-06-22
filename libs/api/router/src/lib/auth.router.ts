import { createUser, getUsers } from '@mobula/controller';
import * as express from 'express';
const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);

export default router;
