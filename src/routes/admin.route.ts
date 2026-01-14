import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import verifyAdmin from "../middlewares/verifyAdmin";
import multer from "multer";

import {
  createGenre,
  getGenres,
  updateGenre,
  deleteGenre,
} from "../controllers/genre.controller";
import {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} from "../controllers/book.controller";
import { getUsers, updateUser } from "../controllers/user.controller";
import router from "./auth.routes";

export const adminRouter = Router();
const upload = multer({ dest: "uploads/" });

// Genre
adminRouter.post("/genres", verifyToken, verifyAdmin, createGenre);
adminRouter.get("/genres", verifyToken, verifyAdmin, getGenres);
adminRouter.put("/genres/:id", verifyToken, verifyAdmin, updateGenre);
adminRouter.delete("/genres/:id", verifyToken, verifyAdmin, deleteGenre);

// Book
adminRouter.post(
  "/books",
  verifyToken,
  verifyAdmin,
  upload.single("cover"),
  createBook
);
adminRouter.get("/books", verifyToken, getBooks);
adminRouter.get("/books/:id", verifyToken, getBooks);
adminRouter.put("/books/:id", verifyToken, verifyAdmin, updateBook);
adminRouter.delete("/books/:id", verifyToken, verifyAdmin, deleteBook);

adminRouter.get("/users", verifyToken, verifyAdmin, getUsers);
adminRouter.put("/user/:id", verifyToken, verifyAdmin, updateUser);
