import express from "express";
import { uploadFile, getFiles } from "../controllers/fileController.js";



const router = express.Router();

router.route("/upload").post(uploadFile).get(getFiles)

export default router