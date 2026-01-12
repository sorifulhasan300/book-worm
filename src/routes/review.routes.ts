import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import verifyAdmin from "../middlewares/verifyAdmin";
import {
  addReview,
  approveReview,
  deleteReview,
} from "../controllers/review.controller";

const reviewRouter = Router();

reviewRouter.post("/", verifyToken, addReview);
reviewRouter.patch("/:id/approve", verifyToken, verifyAdmin, approveReview);
reviewRouter.delete("/:id", verifyToken, verifyAdmin, deleteReview);


export default reviewRouter;
