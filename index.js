//* Dependencias
const express = require('express')
const cors = require('cors')
const {db} = require('./config/db.js')
const dotenv = require('dotenv')
dotenv.config({path: ".env"})
const initModels = require("./models/initModels")


//* Archivos de Rutas

const usuarioRouter = require('./routes/usuario.route.js').router

//* Swagger

const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerSpec = require("./swagger")

//* Configuraciones Iniciales
const app = express()


//Habilitar lectura de datos de formularios

app.use(express.urlencoded({extended:true}))

//Conexion a la base de datos

try {
    db.authenticate();
    db.sync()
    console.log('conexion correcta a la base de datos')
}catch(error){
    console.log(error)
}


const whitelist = ['https://buscador-vuelos.netlify.app/#/registro','http://localhost:5173/#/registro']//acceso a rutas indicadas
//Routing
app.use(cors()) //permitiendo acceso

app.use(express.json())
app.use("/api/v1/usuario", usuarioRouter)
app.use("/api/v1/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))




const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})


exports.default = app