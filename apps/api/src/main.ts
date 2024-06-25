import express from 'express';
import * as path from 'path';
import 'dotenv/config';

import { authRouter, emailRouter } from '@mobula/router';
import { corsMiddleware, authMiddleware, httpLogger } from '@mobula/middleware';
import { LogLevel } from '@mobula/model';

const app = express();

app.use('*', corsMiddleware);
app.use('*', authMiddleware);
app.use('*', httpLogger(LogLevel.Compact));

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api/email', emailRouter);
app.use('/api/auth', authRouter);

app.use(express.static(path.join(__dirname, '/view')));
app.get('*', (_, res) =>
    res.sendFile(path.resolve(__dirname, 'view', 'index.html'))
);

const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
