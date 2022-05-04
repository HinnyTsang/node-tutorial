// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
console.log(__dirname)

// __filename - file name
console.log(__filename)

// require    - function to use modules (CommonJS)
// console.log(require)

// module     - info about current module (file)
// console.log(module)

// process    - info about env where the program is being executed
// console.log(process)

// console.log Hello world per second
setInterval(() =>
    console.log('hello world'), 1000 // ms
)

