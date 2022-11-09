import dbs from "../models/index.js";

export const CreteMahasiswa = async(req, res) => {
    try{
        const {nama , nim , prodi} = req.body;
        await  dbs.mahasiswa.create({nama , nim , prodi});
        res.status(200).send({
            status: 200,
            message: "success"
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

export const GetMahasiswa = async(req, res) => {
    try{

        const mahasiswa = await dbs.mahasiswa.findAll();
        res.status(200).send({
            status: 200,
            message: "success",
            data: mahasiswa
        });

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