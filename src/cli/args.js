const parseArgs = () => {
    const a = process.argv.slice(2)

    for (let i = 0; i < a.length; i += 2) {
        if (a[i].startsWith('--')) {

            console.log(`${a[i].slice(2)} is ${a[i + 1]}`);
        }
    }
};

parseArgs();
