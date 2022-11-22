
export const uploadSinggleImage = async(req, res) => {
    try{
        console.log(req.files)
        res.send("ok")

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