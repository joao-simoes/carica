const express = require('express')
const router = express.Router()
const controller = require('../controllers/beer')


// parse from url and selector
router.get('/all', (req, res) => {

    controller.getAll(req, res)

})


module.exports = router