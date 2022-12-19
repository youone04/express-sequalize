import dbs from "../models/index.js";
import { Op, QueryTypes,Sequelize } from "sequelize";

export const getChat = async(req, res) => {
    try{
       const data =  await dbs.chat.findAll({

        attributes: ['text','sender_id','received_id','createdAt'],
        where: Sequelize.or(
                {
                    sender_id: req.params.senderId,
                    received_id: req.params.receivedId,
                },
                {
                    sender_id: req.params.receivedId,
                    received_id: req.params.senderId,
                }
              )

          });
          res.status(200).send({
            status: 200,
            message: "success",
            data
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

export const postChat = async(req, res) => {
    try{
        const{sender_id ,text , received_id} = req.body;
        const data = await dbs.chat.create({
                sender_id,
                text,
                received_id
            })
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