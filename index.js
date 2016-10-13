const server = require('./server')
  .listen(80, () => console.log(server.address()));