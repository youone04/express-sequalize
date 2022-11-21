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

const router = express.Router();

//user
router.get('/user', getUser);
router.post('/user',createUser);
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

export default router;