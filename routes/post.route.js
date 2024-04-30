const router = require('express').Router()
const {create,getAll,getByUser,addLikeHttp} = require('../http/post.http')
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage })

router.route("/register")
    .post(upload.single("url_image"),create)

router.route("/")
    .get(getAll)
    .put(addLikeHttp)

router.route("/byUser")
    .get(getByUser)





exports.router = router