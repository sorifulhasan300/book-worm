import { Schema, model, Types } from "mongoose";

const tutorialSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    youtubeUrl: {
      type: String,
      required: true,
    },
    book: {
      type: Types.ObjectId,
      ref: "Book",
      required: false,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Tutorial = model("Tutorial", tutorialSchema);
