// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./content/subfolder/first.txt', 'utf8')


// // flag a = append.
// writeFileSync('./content/subfolder/result.txt', `Here is the result ${first}`, {flag: 'a'},  'utf8')

const { readFile, writeFile } = require('fs');

readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        const first = result;
        readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            const second = result;
            writeFile('./content/result-async.txt',
                `merged async is ${first} ${second}`,
                {flag: 'a'},
                (err, result) => {
                    if (err)
                        console.log(err);
                    else console.log(result)
                })
        })
    }
})