const express = require('express')
const router = express.Router()

// parse from url and selector
router.get('/all/superbock', (req, res) => {

    res.status(SUCCESS).send(superbock)

})


module.exports = router