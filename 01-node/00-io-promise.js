const {readFile, writeFile} = require('fs');
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        
        const first = await readFilePromise('./content/subfolder/first.txt', 'utf8'); 
        const second = await readFilePromise('./content/subfolder/second.txt', 'utf8'); 
        await writeFilePromise (
            './content/result-await',
             `utf8-cool! ${first} ${second}`,
             {flag: 'a'})


        console.log(first, second);
    }
    catch
    {
        console.log(error)
    }
}