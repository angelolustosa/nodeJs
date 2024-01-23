const fs = require('fs').promises;
const path = require('path');

const nomeDoDiretorio = 'meuDiretorio';
const nomeDoArquivo = 'meuArquivo.txt';
const conteudoDoArquivo = 'Conteúdo do meu arquivo.';

const caminhoDoDiretorio = path.join(__dirname, nomeDoDiretorio);
const caminhoDoArquivo = path.join(caminhoDoDiretorio, nomeDoArquivo);

// Verificar se o diretório já existe de forma assíncrona
fs.stat(caminhoDoDiretorio)
    .then(() => {
        console.log(`O diretório '${nomeDoDiretorio}' já existe.`);
        return Promise.resolve();
    })
    .catch((err) => {
        if (err.code === 'ENOENT') {
            // Criar o diretório se não existir
            return fs.mkdir(caminhoDoDiretorio)
                .then(() => {
                    console.log(`Diretório '${nomeDoDiretorio}' criado com sucesso.`);
                });
        } else {
            console.error('Erro ao verificar o diretório:', err);
            return Promise.reject(err);
        }
    })
    .then(() => {
        // Escrever conteúdo no arquivo
        return fs.writeFile(caminhoDoArquivo, conteudoDoArquivo, 'utf8');
    })
    .then(() => {
        console.log(`Conteúdo adicionado ao arquivo '${nomeDoArquivo}' com sucesso.`);
    })
    .catch((err) => {
        console.error('Erro:', err);
    });