import {stat, open, write} from 'node:fs';

const create = async () => {
    const fileName = './src/fs/files/fresh.txt';
    const fileContent = 'I am fresh and young';

    stat(fileName, (err, stats) => {
        if (stats) {
            throw Error('FS operation failed');
        }

        open(fileName, 'w', (err, handle) => {
            if (err) {
                throw Error(err.code);
            }
            write(handle, fileContent, (err) => {
                if (err) throw Error(err.code);
            });

        })
    })
};

await create();
