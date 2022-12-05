import {stat, cp} from 'node:fs';

const copy = async () => {
    const sourceDir = './src/fs/files';
    const targetDir = './src/fs/files_copy';

    stat(targetDir, (err, stats) => {

        if (stats) {
            throw Error('FS operation failed');
        }
        cp(sourceDir, targetDir, {recursive: true}, () => {
        })
    });
};

await copy();
