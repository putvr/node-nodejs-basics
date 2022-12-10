import {Worker} from 'node:worker_threads';
import {cpus} from 'node:os';

const runWorker = (n) => new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', {workerData: {n: n}});
        worker.on('message', resolve);
        worker.on('error', reject);
    }
)

const performCalculations = async () => {
    let s = []

    for (let i = 0; i < cpus().length; i++) {
        s.push(runWorker(10 + i));
    }

    Promise.allSettled(s).then(res => {
            console.log(
                res.map(({status, value}) =>
                    (status === "fulfilled") ? {
                        status: 'resolved', data: value
                    } : {
                        status: 'error', data: null
                    }));
        }
    );

};

await performCalculations();
