import dbs from "../models/index.js";

export const uploadImageLokalMultiple =(req, res) => {
    try{
        if(req.files.length === 0) return res.status(404).send({
            status: 404,
            message: "Failed"
        })

        req.files.map(async d => {
            await dbs.uploadphotoslokal.create({nama_gambar : d.filename});
        })
 
        res.status(200).send({
            status: 200,
            message: "Success"
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