const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Sequelize = require('sequelize');
const router = require('./routes/index');

const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api', router);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movie-app.db'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to database was successful!')
  }).catch((err) => {
    console.error('Connection to database was unsuccessful!', err);
  });

app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

sequelize.sync()
  .then(() => {
    console.log("Models were synced successfully.")
  }).catch(err => {
    console.log("Model synchronization was unsuccessful")
  });

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});