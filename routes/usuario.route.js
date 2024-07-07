const router = require('express').Router()
const { create, login, editUserhttp, getById } = require('../http/usuario.http')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })


//Registrar Usuario
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              name_complete:
 *                  type: string
 *                  description: nombre del usuario
 *              cedula:
 *                  type: integer
 *                  description: numero de documento
 *              correo:
 *                  type: string
 *                  description: correo del usuario ;se requiere que sea de formato email
 *          required:
 *              -nombre
 *              -cedula
 *              -correo
 *              -direccion
 *              -nro_vuelo
 *              -cantidad_ticket
 *              -precio
 *              -origen
 *              -destino
 *          example:
 *              nombre: John Doe
 *              cedula: 23238384
 *              correo: john@gmail.com
 *              direccion: calle 8, esquina del exito
 *              nro_vuelo: 3434
 *              cantidad_ticket: 2
 *              precio: $23.000.00
 *              origen: BOG
 *              destino: CUC
 */

/**
 * @swagger
 * /api/v1/usuario/register:
 *  post:
 *      summary: registra un nuevo usuario 
 *      tags: [User]    
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: usuario creado correctamente 
 */

router.route("/register")
  .post(upload.single("url_image"), create)

router.route("/login")
  .get(login)

router.route("/getById")
  .get(getById)

router.route("/edit-user")
  .put(upload.single("url_image"), editUserhttp)




exports.router = router


