import express from 'express';
import { errorMiddleware } from './middlewares/error.middleware';

import routes from './routes/index';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorMiddleware.throwError);

app.listen(3000, () => {
  console.log('Tamo on');
});
