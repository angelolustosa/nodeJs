//  importando o módulo path nativo do Nodejs
// require vem do CommonJs, é como o NodeJs importa e exporta módulos ('arquvios')
var path = require('path');

var filename = path.basename('/teste/teste.js')

console.log('Nome do arquivo:', filename);

var folder = path.dirname('teste.js')

console.log('Nome da pasta:', folder);

