const express = require('express');
const { errorHandler } = require('./middlewares');

const productRouter = require('./routes/products.routes');
const salesRouter = require('./routes/sales.routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(productRouter);
app.use(salesRouter);
app.use(errorHandler);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;