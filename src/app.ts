import express from 'express';
import 'express-async-errors';
import routers from './router';
import httpErrorMiddleware from './middleware/httpErrorMiddleware';

const app = express();

app.use(express.json());
app.use(routers);
app.use(httpErrorMiddleware);

export default app;
