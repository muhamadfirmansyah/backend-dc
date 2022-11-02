const fs = require('fs');
const path = require('path');

const writeableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

writeableStream.write('Ini merupakan teks baris pertama!\n');
writeableStream.write('Ini merupakan teks baris kedua!\n');
writeableStream.end('Akhir dari writable stream!');