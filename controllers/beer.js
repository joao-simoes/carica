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

exports.create = create