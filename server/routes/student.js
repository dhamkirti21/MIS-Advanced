import express from "express";
import {addStudent} from "../controllers/student.js";
const router = express.Router();

router.get("/add-student",addStudent);


export default router;