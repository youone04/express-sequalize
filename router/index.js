import { 
    getUser, createUser , 
    UpdateUser , DeleteUser , 
    LoginUser,} from "../controller/UserController.js";
import express from "express";
import { VerifyToken } from "../middleware/verifyToken.js";
import { 
    CreteMahasiswa, GetMahasiswa, 
    DeleteMahasiswa, UpdateMahasiswa,
    GetMahasiswa2
 } from "../controller/MahasiswaController.js";
import { GetMatakuliah } from "../controller/MatakuliahController.js";
import { uploadImageLokal } from "../controller/UploadImageLokal.js";
import UploadImageLokal from "../middleware/uploadImageLocal.js";
import { uploadImageLokalMultiple } from "../controller/UploadImageLokalMultiple.js";
import { uploadImageCloud } from "../controller/UploadImageCloud.js";
import UploadImageCloud from "../middleware/uploadImageCloud.js";
import { check ,body } from 'express-validator';
import { createUserValidation } from "../middleware/validasiForm.js";
import { getCity, getCost, getProvince } from "../controller/RajaOngkir.js";
import { getChat ,postChat } from "../controller/Chat.js";

const router = express.Router();

//user
router.get('/user', getUser);

router.post('/user',
check('nama', ' Name is required').notEmpty(), 
check('email', ' Email is required').notEmpty(),
body('email').isEmail(),body('password').isLength({ min: 3,max: 5 })
,createUser);

router.put('/user/:email', UpdateUser);
router.delete('/user/:email', DeleteUser);
router.post('/login', LoginUser);

//mahasiswa
router.post('/mahasiswa',VerifyToken(['admin']), CreteMahasiswa)
router.get('/mahasiswa',VerifyToken(["user","admin"]), GetMahasiswa);
router.delete('/mahasiswa/:id',VerifyToken(["user","super_admin"]), DeleteMahasiswa);
router.put('/mahasiswa/:id',VerifyToken(["user","super_admin"]), UpdateMahasiswa);

//mahasiswa2
router.get('/mahasiswa2', GetMahasiswa2);

//matkuliah
router.get('/matakuliah', GetMatakuliah);

//upload image singgle lokal
router.post('/upload-singgle-image-lokal',UploadImageLokal.single("gambar"), uploadImageLokal);

//upload imgae multiple lokal
router.post('/upload-multiple-image-lokal',UploadImageLokal.array("gambar"), uploadImageLokalMultiple);

//upload image singgle cloud
router.post('/upload-singgle-image-cloud',UploadImageCloud.single("gambar"), uploadImageCloud);

//raja ongkir
router.get('/get-city', getCity);
router.get('/get-province', getProvince);
router.get('/get-cost', getCost);

// chat
router.get('/chat/:senderId/:receivedId', getChat);
router.post('/chat', postChat);


export default router;