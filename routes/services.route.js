const router = require('express').Router()
const {create} = require('../http/services.http')

router.route("/")
    .post(create)





exports.router = router