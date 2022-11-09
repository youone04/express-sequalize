import { 
    getUser, createUser , 
    UpdateUser , DeleteUser , 
    LoginUser} from "../controller/UserController.js";
import express from "express";
import { VerifyToken } from "../middleware/verifyToken.js";
import { CreteMahasiswa, GetMahasiswa } from "../controller/MahasiswaController.js";
const router = express.Router();

//user
router.get('/user', getUser);
router.post('/user',createUser);
router.put('/user/:email', UpdateUser);
router.delete('/user/:email', DeleteUser);
router.post('/login', LoginUser);

//mahasiswa
router.post('/mahasiswa',VerifyToken('admin'), CreteMahasiswa)
router.get('/mahasiswa',VerifyToken('admin'), GetMahasiswa);

export default router;