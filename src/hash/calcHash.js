import {createHash} from 'node:crypto';
import {readFile} from 'node:fs';

const calculateHash = async () => {
    readFile('./src/hash/files/fileToCalculateHashFor.txt', (err, data) => {
        if (err) throw err;
        console.log(createHash('sha256').update(data).digest('hex'));
    })
};

await calculateHash();
