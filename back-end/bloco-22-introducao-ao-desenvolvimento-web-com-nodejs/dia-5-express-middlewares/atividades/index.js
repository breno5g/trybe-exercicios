const express = require('express');
const router = require('./Routes');
const error = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());
const PORT = 3000;

// Atividade 01
app.use(router.userRouter);

// Atividade 02
app.use(router.btcRouter);

// Atividade 03
app.use(router.postsRouter);

// Atividade 04
app.use(router.teamsRouter);

// Pega qualquer rota que não tenha sido criada e dispara um erro (deve sempre ficar por ultimo)
app.use('*', (_req, _res, next) =>
  // Passa um objecto com o status e a mensgem do erro
  next({ status: 404, message: 'Opsss, route not found!' })
);
// Usa o middleware de erro
app.use(error);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
