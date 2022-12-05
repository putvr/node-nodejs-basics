import {opendir} from 'node:fs/promises';

const list = async () => {
    try {
        const dir = await opendir('./src/fs/files');
        for await (const file of dir) {
            console.log(file.name);
        }

    } catch (err) {
        if (err) throw Error('FS operation failed');
    }
};

await list();
