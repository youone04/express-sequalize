import { getUser, createUser , UpdateUser , DeleteUser} from "../controller/UserController.js";
import express from "express";
const router = express.Router();

router.get('/user', getUser);
router.post('/user', createUser);
router.put('/user/:email', UpdateUser);
router.delete('/user/:email', DeleteUser);

export default router;