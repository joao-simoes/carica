const BeerModel = require('../models/beer')
const Beer = BeerModel.Beer

const create = (req, res) => {

    const newBeer = new Beer(req.body)

    newBeer.save(function(err, newBeer) {
        if (err) {
            res.status(400).send(err)
        }

        res.status(200).json(newBeer)
    })

}

const getAll = (req, res) => {


    Beer.find(function(err, beers) {
        if (err) {
            res.status(400).send(err)
        }

        console.log(beers);

        res.status(200).json(beers)
    })

}

exports.create = create
exports.getAll = getAll