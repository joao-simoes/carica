// declare status
const SUCCESS = 200
const UNAUTHORIZED = 401
const NOTFOUND = 404

// load libraries
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const helpers = require('./helpers.js')

// load configs
app.use(express.json())
require('dotenv').config()




//init info
class Beer {

    constructor(marca, estilo, alcool, quantidade, tipo, tamanho, supermercados) {
        this.marca = marca
        this.estilo = estilo
        this.alcool = alcool
        this.quantidade = quantidade
        this.tipo = tipo
        this.tamanho = tamanho
        this.supermercados = supermercados
    }

}
var superbock_test = new Beer("Super Bock", "Pilsener", 5.2, 1, "Lata", 0.33, { "continente": { "url": "https://www.continente.pt/produto/cerveja-com-alcool-mini-super-bock-6148284.html", "selector": ".ct-price-formatted", "preco": "NA" }, "pingodoce": { "url": "", "selector": "", "preco": "NA" } })
const superbock = [superbock_test]





// parse from url and selector
app.get('/all/superbock', (req, res) => {

    res.status(SUCCESS).send(superbock)

})



app.post('/new/superbock', (req, res) => {

    if (helpers.authenticate(req.headers.authorization)) {

        var newSuperbock = new Beer(req.body)
        superbock.push(newSuperbock)

        res.status(SUCCESS).send(newSuperbock)

    } else res.sendStatus(UNAUTHORIZED)

})



app.post('/parse', async(req, res) => {

    // validate authentication
    if (helpers.authenticate(req.headers.authorization))
        res.status(SUCCESS).json(await helpers.scrapeFromUrlAndSelector(req.body.url, req.body.selector))
    else res.sendStatus(UNAUTHORIZED)

})








// routes preventions

app.get('/*', (req, res) => {
    res.sendStatus(NOTFOUND)
})

app.post('/*', (req, res) => {
    res.sendStatus(NOTFOUND)
})




// start server
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}!`)

})