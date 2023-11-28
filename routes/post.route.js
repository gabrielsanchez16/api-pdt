const router = require('express').Router()
const {create,getAll,getByUser,addLikeHttp} = require('../http/post.http')


router.route("/register")
    .post(create)

router.route("/")
    .get(getAll)
    .put(addLikeHttp)

router.route("/byUser")
    .get(getByUser)





exports.router = router