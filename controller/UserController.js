import dbs from "../models/index.js";

export const getUser = async(req, res) => {
    try{
        const user = await dbs.user.findAll();
        res.send({
            status: 202,
            message:"Success",
            data: user
        })

    }catch(error){
        res.send({
            status: 500,
            message: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}