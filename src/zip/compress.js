import {createGzip} from "node:zlib";
import {createReadStream, createWriteStream} from "node:fs";

const compress = async () => {
    const fileName = './src/zip/files/fileToCompress.txt';
    const archiveName = './src/zip/files/archive.gz';

    const compressor = createGzip();

    const readStream = createReadStream(fileName);
    const writeStream = createWriteStream(archiveName);

    readStream.pipe(compressor).pipe(writeStream).on('finish', () => {
        writeStream.close();
        readStream.close();
    })

};

await compress();
