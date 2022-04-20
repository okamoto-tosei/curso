

const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes/book');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyparser.json());

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server run on http://localhost:${port}`);
  console.log(`Swagger Server run on http://localhost:${port}/api-docs`);
  console.log(`api Server run on http://localhost:${port}/api/v1`);
});
