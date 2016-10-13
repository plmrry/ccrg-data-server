const express = require('express');
const app = express();
app.use('/', (req, res) => {
  res.end('<html>Hello from a different port!</html>');
});
const server = app.listen(3215, () => console.log(server.address()));