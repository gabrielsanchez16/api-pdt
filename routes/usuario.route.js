const router = require('express').Router()
const {create,login, editUserhttp} = require('../http/usuario.http')



//Registrar Usuario
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: nombre del usuario
 *              cedula:
 *                  type: integer
 *                  description: numero de documento
 *              correo:
 *                  type: string
 *                  description: correo del usuario ;se requiere que sea de formato email
 *              direccion:
 *                  type: string
 *                  description: direccion del usuario
 *              nro_vuelo:
 *                  type: integer
 *                  description: numero del vuelo; se genera solo al obtener un vuelo correcto
 *              cantidad_ticket:
 *                  type: integer
 *                  description: cantidad de tickets ; se genera solo al obtener un vuelo correcto
 *              precio:
 *                  type: string
 *                  description: precio del vuelo; se genera solo al obtener un vuelo correcto
 *              origen:
 *                  type: string
 *                  description: origen de salida del vuelo; se genera solo al obtener un vuelo correcto
 *              destino:
 *                  type: string
 *                  description: destino de llegada del vuelo; se genera solo al obtener un vuelo correcto
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
    .post(create)

router.route("/login")
    .get(login)


router.route("/edit-user")
    .put(editUserhttp)




exports.router = router


