const { rmSync } = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('home')
    }
    else if (req.url === '/about') {
        res.end('about')
    }
    else
        res.end('Oops') 
})


server.listen(5000)