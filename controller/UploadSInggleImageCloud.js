import cloudinary from "cloudinary";
const cloud = cloudinary.v2;
cloud.config({
    cloud_name: `idnedc`,
    api_key: `318155977661723`,
    api_secret: `g59Npx9NfVRW6SjlSlewQ3B4C_A`,
  });

  export const UploadImageCloudinary = async(req, res) => {
    const hsl = new Promise((resolve, reject) => {
        cloud.uploader.upload(req.file.path, async (err, result) => {
          if (err) throw err;
          resolve(result.url);
        });
      });
    
      const data = await hsl;
      // console.log(req.file)
      res.status(200).send({
        status: 200,
        message: "Sucesss",
        data: data,
      });
  }
