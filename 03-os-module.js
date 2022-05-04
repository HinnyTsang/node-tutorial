// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const os = require('os')

// info about curret user 
const user = os.userInfo()
console.log(user)


// methods return the system uptine in seconds
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)