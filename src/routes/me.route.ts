import { Router } from "express";
import { register, login } from "../controllers/auth.controller";
import { me } from "../middlewares/authMe";
import { auth } from "../controllers/auth.me.controller";

const meRouter = Router();
meRouter.get("/me", auth, me);

export default meRouter;
