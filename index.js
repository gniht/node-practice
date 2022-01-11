const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer( ( req, res ) => {
  res.setHeader('Content-Type', 'text/html');
  
  let url = '.' + req.url;
  
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }    
  });
    
});

server.listen(3000, 'localhost', () => {
  console.log('listening on port 3000');
});
