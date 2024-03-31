import { Router } from "express";
import { registerUser } from "../controller/user.controler.js";
import {upload} from '../midlewares/multer.js'
const router = Router();

router.post("/register", upload.fields([
    {
        name:'avatar',
        maxCount:1
    },
    {
        name:'coverImage',
        maxCount:1
    }
]),  registerUser )

export default router;