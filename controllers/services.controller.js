const { Services } = require("../models/Services");




const createServices = async (user_id,type,route_Bus) => {

    const newServices = await Services.create({
        userId:user_id,
        type:type,
        route_Bus:route_Bus
    })
    return  newServices;
}




module.exports = {
    createServices
}