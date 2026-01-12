import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import verifyAdmin from "../middlewares/verifyAdmin";
import { addReview, approveReview } from "../controllers/review.controller";

const reviewRouter = Router();

reviewRouter.post("/", verifyToken, addReview);
reviewRouter.patch("/:id/approve", verifyToken, verifyAdmin, approveReview);

export default reviewRouter;
