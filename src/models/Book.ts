import mongoose, { Schema, Document } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  genre: mongoose.Types.ObjectId;
  description: string;
  coverImage: string;
  avgRating: number;
}

const BookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: Schema.Types.ObjectId, ref: "Genre", required: true },
    description: String,
    coverImage: String,
    avgRating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model<IBook>("Book", BookSchema);
