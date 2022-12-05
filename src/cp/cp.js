import {spawn} from 'node:child_process';

const spawnChildProcess = async (args) => {
    const proc = spawn('node', ['./src/cp/files/script.js', args]);

    proc.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    process.stdin.on('data', (data) => {
        proc.stdin.write(data)
    })
};

spawnChildProcess();
