import express from 'express';
import * as path from 'path';
import 'dotenv/config';

import { authRouter, emailRouter } from '@mobula/router';
import { corsMiddleware, authMiddleware, httpLogger } from '@mobula/middleware';

const app = express();

app.use('*', corsMiddleware);
app.use('*', authMiddleware);
app.use('*', httpLogger('compact'));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/email', emailRouter);
app.use('/api/auth', authRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);