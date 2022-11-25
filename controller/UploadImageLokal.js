import dbs from "../models/index.js";

export const uploadImageLokal = async(req, res) => {
    try{

        // console.log(req.file.filename)
        await dbs.uploadphotoslokal.create({nama_gambar : req.file.filename})
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