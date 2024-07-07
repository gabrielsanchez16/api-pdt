const { createServices } = require('../controllers/services.controller.js')

const create = (req, res) => {
    const { user_id,type,route_bus } = req.body;
    if (!user_id && !type ) {
        return res.status(400).json({ message: 'Data Not Found' })
    }else if(!user_id || !type){
        return res.status(400).json({  message: 'All fiels must be completed', fields: {
            user_id: 'string',
            type: "string",
            route_bus: 'string'
        },})
    } else {
        const response = createServices(user_id,type,route_bus)
            .then((response) => {
                res.status(201).json({
                    message: `user created succesfuly with id: ${response.id}`,
                    service: response
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

}





module.exports = {
    create
}