const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer( ( req, res ) => {
  res.setHeader('Content-Type', 'text/html');
  let filePath = './views'; 
  
  console.log(filePath);

  if (req.url == "/") {
    filePath += "/index.html";  
  } else if (req.url == '/about') {
    filePath += "/about.html";
  } else if ( req.url == "/contact") {
    filePath += "/contact.html";
  } else {
    console.log("ERROR: unknown page requested.");
  }
  
  fs.readFile(filePath, (err, data) => {
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
