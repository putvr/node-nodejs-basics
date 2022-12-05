import {open} from 'node:fs/promises';

const read = async () => {

    try {
        const file = await open('./src/fs/files/fileToRead.txt');

        for await (const line of file.readLines()) {
            console.log(line);
        }
    } catch (err) {
        if (err) throw Error('FS operation failed');
    }
};

await read();




