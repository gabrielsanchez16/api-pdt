const router = require('express').Router()
const {create} = require('../http/usuario.http')



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
 *          required:
 *              -nombre
 *              -cedula
 *              -correo
 *              -direccion
 *          example:
 *              nombre: John Doe
 *              cedula: 23238384
 *              correo: john@gmail.com
 *              direccion: calle 8, esquina del exito
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





exports.router = router


