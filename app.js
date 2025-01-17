require('dotenv').config();
require('./config/db.config');

const express = require('express');
const logger = require('morgan');

const app = express();

require('./config/hbs.config');

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`))

// es un middleware para hacer el 'res' de los post del formulario
app.use(express.urlencoded({extended:false}));

//para todas las peticiones hagan log
app.use(logger('dev'));

//middleware para no tener que escribir req.path en cada una de las vistas
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
})

const routes = require('./config/routes.config');
app.use('/', routes);

//middleware  de error para todos los catch (), importante, de pone despeus de las routes, no antes
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send("Ops, something went wrong");
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Application is running at port ${port}`));
