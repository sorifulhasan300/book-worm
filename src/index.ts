import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import router from "./routes/admin.route";
import reviewRouter from "./routes/review.routes";
import tutorialRoute from "./routes/tutorial.route";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("BookWorm Server Running (TS)");
});
app.use("/api/admin", router);
app.use("/api/review", reviewRouter);
app.use("/api/tutorial", tutorialRoute);

app.use("/api/auth", require("./routes/auth.routes").default);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
