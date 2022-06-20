import express from 'express';
import { errorMiddleware } from './middlewares/error.middleware';

import { Route } from './routes/user.route';

// const app = express();

// app.use(express.json());

// const teste = (express.RequestHandler = (_req: any, res: any, next: any) => {
//   res.header(
//     'Access-Control-Allow-Methods',
//     'GET,POST,DELETE,OPTIONS,PUT,PATCH'
//   );
//   next();
// });

// app.use(teste);

// app.use(routes);

// app.use(errorMiddleware.throwError);

// app.listen(3000, () => {
//   console.log('Tamo on');
// });

// Maneira que o Rafael fez funcionar mas ainda não entendo 100%
class App {
  app: express.Express;
  public route = new Route()
  constructor() {
    this.app = express();
    this.porFavorFuncione();
  }

  private porFavorFuncione(): void {
    const teste: express.RequestHandler = (
      _req: any,
      res: any,
      next: any
    ) => {
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH'
      );
      next();
    };

    this.app.use(teste)

    this.app.use(express.json());

    this.route.user(this.app)

    this.app.use(errorMiddleware.throwError);
  }

  public init(): void {
    this.app.listen(3000, () => {
      console.log('Tamo on');
    });
  }
}

const app = new App();

app.init()
