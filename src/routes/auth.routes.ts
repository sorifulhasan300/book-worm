import { Router } from "express";
import multer from "multer";
import { register, login } from "../controllers/auth.controller";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/register", upload.single("photo"), register);
router.post("/login", login);

export default router;
