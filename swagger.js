const path = require("path")

const swaggerSpec = {
    definition:{
        openapi:"3.0.0",
        info: {
            title: "Api registro usuarios",
            version: "1.0.0"
        },
        servers:[
            {
                url: "http://localhost:800"
            }
        ]
    },
    apis: [
        `${path.join(__dirname, "./routes/*.js")}`
    ]
}



module.exports = swaggerSpec