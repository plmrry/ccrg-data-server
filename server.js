const express = require('express');

const app = express();

module.exports = app;

app.use('/index-cards', require('../index-card-db-api'));

app.get('/', (req, res) => {
  res.end('Hello from the CCRG Data Server.');
});

// If you want a reverse proxy:

// const httpProxy = require('http-proxy');
// const proxy = httpProxy.createProxyServer();
// app.use('/test', (req, res) => {
//   proxy.web(req, res, { target: 'http://localhost:3215' });
// });