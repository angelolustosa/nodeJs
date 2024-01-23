const fs = require('fs')

const lerArquivo = (pathArquivo) => {
    //Lendo conteúdo do arquivo, se não for informado o enconding, será retornado em formato de buffer, inserindo o encondig, 'uf8', após o path do arquivo, retorna o conteúdo corretamente, assim como está no arquivo: 'Conteúdo: Ei tenho conteúdo!!'
    fs.readFile(pathArquivo, 'utf8', (err, data) => {
        if (err) {
            console.log('Erro ao ler o arquivo!');
            return;
        }
        console.log('Conteúdo:', data)
    })
}

const escreverArquivo = (pathArquivo, conteudo) => {
    fs.writeFile(pathArquivo, conteudo, 'utf8', (err) => {
        if (err) {
            console.log('Erro ao escrever no arquivo:', err);
            return;
        }
        console.log('Conteúdo inserido com sucesso!');
    })
}

module.exports = { lerArquivo, escreverArquivo }

