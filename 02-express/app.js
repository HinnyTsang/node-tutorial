const express = require('express');
const {products, people} = require('./data')

const app = express()

// app.use(express.static('./public')) 

app.get('/', (req, res) => {
    res.send("<h1>home</h1><a href='/api/products'>products</a>")
    // res.json([{name: 'john'}])
})

app.get('/api/products/:productID', (req, res) => {
    

    const {productID} = req.params;

    const newProducts = products.find((product) => product.id === Number(productID))

    console.log(newProducts);
    
    if (newProducts) {
        res.json(newProducts)
    }
    else {
        res.status(400).send('Items does not exist.')
    }

    
})
// good example of api http://<url>/api/vl/users/items/:id 


app.get('/api/products/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
})

app.get('/about', (req, res) => {
    res.status(200).send('About')
})



app.listen(5000, () => {
    console.log('server is listerning on port 5000')
})

// auto reponse
app.all('*', (req, res) => {
    res.status(404)
        .send('404 Not found.')
})