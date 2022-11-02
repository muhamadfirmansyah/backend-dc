// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');

const fileReadCallback = (err, data) => {
    if (err) {
        console.error('Gagal membaca berkas!');
        return;
    }

    console.log(data);
};

fs.readFile(path.resolve(__dirname, 'notes.txt'), 'utf-8', fileReadCallback);