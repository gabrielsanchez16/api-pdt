const router = require('express').Router()
const {create,getAll,getByPost} = require('../http/message.http')


router.route("/register")
    .post(create)

router.route("/")
    .get(getAll)

router.route("/bypostid")
    .get(getByPost)


    
exports.router = router