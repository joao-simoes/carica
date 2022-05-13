const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
    marca: String,
    estilo: String,
    alcool: String,
    quantidade: String,
    tipo: String,
    tamanho: String,
    supermercados: Array
}, {
    writeConcern: {
        j: true,
        wtimeout: 1000
    }
}, )

const Beer = mongoose.model('Beer', beerSchema);

exports.Beer = Beer