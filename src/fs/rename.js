import {rename as nodeRename} from 'node:fs';

const rename = async () => {
    const wrongFilename = './src/fs/files/wrongFilename.txt';
    const properFilename = './src/fs/files/properFilename.md';

    nodeRename(wrongFilename, properFilename, (err) => {
        if (err) throw Error('FS operation failed');
    })
};

await rename();

