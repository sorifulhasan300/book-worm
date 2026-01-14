import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import {
  addToShelf,
  myLibrary,
  updateProgress,
  updateShelf,
} from "../controllers/shelf.controller";

export const shelfRouter = Router();
shelfRouter.post("/", verifyToken, addToShelf);
shelfRouter.get("/me", verifyToken, myLibrary);
shelfRouter.patch("/:id/shelf", verifyToken, updateShelf);
shelfRouter.patch("/:id/progress", verifyToken, updateProgress);
