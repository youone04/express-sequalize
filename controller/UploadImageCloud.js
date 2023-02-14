import dbs from "../models/index.js";
import cloudinary from "cloudinary";
import sizeOf from "image-size"
cloudinary.config({
    cloud_name: 'idnedc',
    api_key:'318155977661723',
    api_secret:'g59Npx9NfVRW6SjlSlewQ3B4C_A'

  });

export const uploadImageCloud = async(req, res) => {
    try{
        // console.log(req.file)
        let dimensions = sizeOf(req.file.path);
        if(dimensions.width > 1000 || dimensions.height > 1000) return res.send("dimension not allowed")

        const hsl = new Promise((resolve, reject) => {
            cloudinary.v2.uploader.upload(req.file.path, async (err, result) => {
              if (err) throw err;
              await dbs.uploadphotoslokal.create({nama_gambar : result.url})
              resolve(result.url);
            });
          });
        const data = await hsl;
        res.status(200).send({
            status: 200,
            message: "Success",
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