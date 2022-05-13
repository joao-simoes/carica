const express = require('express')
const router = express.Router()
const controller = require('../controllers/beer')
const helpers = require('../helpers')

router.post('/superbock', async(req, res) => {

    if ("authorization" in req.headers) {

        if (helpers.authenticate(req.headers.authorization)) {

            let i = 0
            for (let supermarket of req.body.supermercados) {
                supermarket.preco = await helpers.scrapeFromUrlAndSelector(supermarket.url, supermarket.selector)
                supermarket.precolitro = parseFloat(parseFloat(supermarket.preco) / (parseFloat(req.body.tamanho) * parseInt(req.body.quantidade))).toFixed(2)

                req.body.supermercados[i] = supermarket
                i++
            }

            controller.create(req, res)


        } else res.sendStatus(401)

    } else res.sendStatus(401)

})

module.exports = router