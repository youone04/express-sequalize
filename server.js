import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import dbs from "./models/index.js";
import db from "./config/Database.js"
import router from "./router/index.js";

const app = express()
dotenv.config();
const PORT = process.env.PORT || 8800;

try{
    await db.authenticate();
    console.log('Database terhubung');
    await dbs.user.sync()
}catch(error){
    console.log(error)
}

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(morgan("dev"));

app.use('/api' ,router);
app.get('/', (req, res) => {

   try{
    res.send({
        status: 200,
        message: "api berhasil di jalankan",
        data: []
    })
   }catch(e){
    res.send({
        status: 500,
        message: "api gagal di jalankan"
    })
   }
})

app.get("*" , (req, res) => {
    res.send({
        status: 404,
        message: "Routing Not Found!"
    })
})


app.listen(PORT , () => {
    console.log("server terhubung...")
})