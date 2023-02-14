import dbs from "../models/index.js";
import Sequalize from "sequelize";

export const getChat = async(req, res) => {
    try{
        const {sender_id , received_id } = req.params;
        const pesan = await dbs.chat.findAll({
            where: Sequalize.or(
                {
                 sender_id: sender_id,
                 received_id: received_id

                },
                {
                    sender_id: received_id,
                    received_id: sender_id
                }
            )
        });
        res.status(200).send({
            status: 200,
            message: "success",
            pesan
        })

    }catch(error){
        res.status(500).send({
            status: 500,
            message:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const postMessage = async(req, res) => {
    try{
        const {sender_id , received_id ,text } = req.body;
         await dbs.chat.create({
            sender_id,
            received_id,
            text
        });
        res.status(200).send({
            status: 200,
            message: "success",
        })

    }catch(error){
        res.status(500).send({
            status: 500,
            message:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}