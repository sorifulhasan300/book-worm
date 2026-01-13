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

const router = Router();
const upload = multer({ dest: "uploads/" });

// Genre
router.post("/genres", verifyToken, verifyAdmin, createGenre);
router.get("/genres", verifyToken, verifyAdmin, getGenres);
router.put("/genres/:id", verifyToken, verifyAdmin, updateGenre);
router.delete("/genres/:id", verifyToken, verifyAdmin, deleteGenre);

// Book
router.post(
  "/books",
  verifyToken,
  verifyAdmin,
  upload.single("cover"),
  createBook
);
router.get("/books", verifyToken, getBooks);
router.get("/books/:id", verifyToken, getBooks);
router.put("/books/:id", verifyToken, verifyAdmin, updateBook);
router.delete("/books/:id", verifyToken, verifyAdmin, deleteBook);

export default router;
