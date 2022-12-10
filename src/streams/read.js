import {createReadStream} from 'node:fs';

const read = async () => {
    let data = '';
    const stream = createReadStream('src/streams/files/fileToRead.txt');

    stream.on('data', (buff) => {
        data += buff;
    })

    stream.on('end', () => {
        console.log(data)
    });
};

await read();
