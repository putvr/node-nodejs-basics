import {createWriteStream} from 'node:fs';

const write = async () => {
    process.stdin.on('data', data => {
        stream.write(data);
    });

    const stream = createWriteStream('src/streams/files/fileToWrite.txt');

    stream.on('finish', () => {
        stream.close();
    })
};

await write();
