let jsonServer = require('json-server');
let server = jsonServer.create();
const router = jsonServer.router('./src/assets/logs.json');
const middleware = jsonServer.defaults();
server.use(middleware);
server.use(router);
server.listen(8080, () => {
  console.log('JSON Server is running');
})