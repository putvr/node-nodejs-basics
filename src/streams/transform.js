import {Transform} from 'node:stream';

const transform = async () => {

    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse());
        },
    });
    process.stdin.pipe(myTransform).pipe(process.stdout);

};

await transform();
