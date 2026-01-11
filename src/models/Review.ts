import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  user: mongoose.Types.ObjectId;
  book: mongoose.Types.ObjectId;
  rating: number;
  text: string;
  status: "pending" | "approved";
}

const ReviewSchema = new Schema<IReview>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  book: { type: Schema.Types.ObjectId, ref: "Book" },
  rating: Number,
  text: String,
  status: { type: String, default: "pending" },
});

export default mongoose.model<IReview>("Review", ReviewSchema);
