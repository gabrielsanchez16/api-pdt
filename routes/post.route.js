const router = require('express').Router()
const {create,getAll,getByUser} = require('../http/post.http')


router.route("/register")
    .post(create)

router.route("/")
    .get(getAll)

router.route("/byUser")
    .get(getByUser)



exports.router = router