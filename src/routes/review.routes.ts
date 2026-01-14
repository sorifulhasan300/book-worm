import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import verifyAdmin from "../middlewares/verifyAdmin";
import {
  addReview,
  allReviews,
  approveReview,
  deleteReview,
  rejectReview,
  reviewsByBook,
} from "../controllers/review.controller";

const reviewRouter = Router();

reviewRouter.post("/", verifyToken, addReview);
reviewRouter.patch("/:id/approve", verifyToken, verifyAdmin, approveReview);
reviewRouter.patch("/:id/reject", verifyToken, verifyAdmin, rejectReview);

reviewRouter.delete("/:id", verifyToken, verifyAdmin, deleteReview);
reviewRouter.get("/:bookId", verifyToken, reviewsByBook);
reviewRouter.get("/all", verifyToken, verifyAdmin, allReviews);

export default reviewRouter;
