import express from "express";
import {
  createTutorial,
  getTutorials,
  deleteTutorial,
} from "../controllers/tutorial.controller";
import verifyToken from "../middlewares/verifyToken";
import verifyAdmin from "../middlewares/verifyAdmin";

const tutorialRoute = express.Router();

tutorialRoute.post("/", verifyToken, verifyAdmin, createTutorial);
tutorialRoute.get("/", getTutorials);
tutorialRoute.delete("/:id", verifyToken, verifyAdmin, deleteTutorial);

export default tutorialRoute;
