const http = require('http')
const { readFileSync } = require('fs')

///                           request, response


const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/style.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeJs = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {

    const url = req.url;
    console.log (url)
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }

    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<body><h1>About page</h1></body>')
        res.end()
    }
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles)
        res.end()
    }

    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }
  
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeJs)
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<body><h1>Not found</h1></body>')
        res.end()
    }

    //  HTTP status code, 

    console.log('user reques successful! ')
})

server.listen(5000);