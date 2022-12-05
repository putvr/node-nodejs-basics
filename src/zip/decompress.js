import {createGunzip} from "node:zlib";
import {createReadStream, createWriteStream} from "node:fs";

const decompress = async () => {
    const archiveName = './src/zip/files/archive.gz';
    const fileName = './src/zip/files/fileToCompress.txt';

    const decompressor = createGunzip();

    const readStream = createReadStream(archiveName);
    const writeStream = createWriteStream(fileName);

    readStream.pipe(decompressor).pipe(writeStream).on('finish', () => {
        writeStream.close();
        readStream.close();
    })
};

await decompress();
