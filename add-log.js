let jsonServer = require('json-server');
let server = jsonServer.create();
let fs = require('fs');
server.post('/appendLog', function (req, res) {
  //Open a file on the server and return its content:
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
  fs.appendFile('./src/assets/logs.json', req.body , function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
}).listen(8080);