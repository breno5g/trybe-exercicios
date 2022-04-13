import fs from 'fs';
import client from 'https';
import { question } from 'readline-sync';
import terminalImage from 'terminal-image';

function downloadImage(url, filepath) {
  client.get(url, (res) => {
    res.pipe(fs.createWriteStream(filepath));
    setTimeout(() => {
      log();
    }, 500);
  });
}

const log = async () => {
  console.log(await terminalImage.file('default.jpg'));
};

const url = question('Insira o URL da imagem desejada: ');

downloadImage(url, 'default.jpg');
