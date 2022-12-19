import request from "request";

export const getProvince = async(req, res) => {
  try{

    var options = {
      method: 'GET',
      url: 'https://api.rajaongkir.com/starter/province',
      // qs: {id: '12'},
      headers: {key: 'd5efe8aee69a28b829bb1fc959543281'}
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      const hasil = JSON.parse(body)
      res.status(200).json(hasil.rajaongkir.results)
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

export const getCity = async(req, res) => {
    try{
        var options = {
            method: 'GET',
            url: 'https://api.rajaongkir.com/starter/city',
            qs: {province: req.body.id},
            headers: {key: 'd5efe8aee69a28b829bb1fc959543281','content-type': 'application/x-www-form-urlencoded'}
          };
          
          request(options, function (error, response, body) {
            if (error) throw new Error(error);
            const hasil = JSON.parse(body)
              res.status(200).json(hasil.rajaongkir.results)
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

export const getCost = async(req, res) => {
  try{
    var options = {
      method: 'POST',
      url: 'https://api.rajaongkir.com/starter/cost',
      headers: {key: 'd5efe8aee69a28b829bb1fc959543281', 'content-type': 'application/x-www-form-urlencoded'},
      form: {origin: '39', destination: req.body.dest, weight: req.body.weigth, courier: 'jne'}
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      const hasil = JSON.parse(body)
      res.status(200).json(hasil.rajaongkir.results)
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