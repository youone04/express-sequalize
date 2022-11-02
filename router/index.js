import { getUser } from "../controller/UserController.js";
import express from "express";
const router = express.Router();

router.get('/user', getUser);

export default router;