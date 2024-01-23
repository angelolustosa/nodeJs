//Importa o modulo http
const http = require('http');


const hostname = '127.0.0.1'; //Configura o ip
const port = 3000; //Configura a porta

//Utiliza o modulo http e  chama a função createServer
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\nOI meu nome é Angelo o cara mais lindo!');
});

//Instacia do createServer e chama o método listen () que sobe o servido em uma ip e porta
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});