import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import verifyAdmin from "../middlewares/verifyAdmin";
import {
  addReview,
  approveReview,
  deleteReview,
  reviewsByBook,
} from "../controllers/review.controller";

const reviewRouter = Router();

reviewRouter.post("/", verifyToken, addReview);
reviewRouter.patch("/:id/approve", verifyToken, verifyAdmin, approveReview);
reviewRouter.delete("/:id", verifyToken, verifyAdmin, deleteReview);
reviewRouter.get("/", verifyToken, deleteReview);
reviewRouter.get("/:id", verifyToken, reviewsByBook);

export default reviewRouter;
