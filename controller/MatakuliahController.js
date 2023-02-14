import dbs from "../models/index.js";

//data many to many
export const GetMatakuliah = async(req, res) => {
    try{

        const matakuliah = await dbs.matakuliah.findAll({
            include: [
                {
                 model: dbs.mahasiswa2,
                 through: {
                    attributes: []
                  }
                //  attributes: ["id"],
                }]
        });
        res.status(200).send({
            status: 200,
            message: "success",
            data: matakuliah
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