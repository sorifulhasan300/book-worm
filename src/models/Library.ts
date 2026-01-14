import { Schema, model, Types } from "mongoose";

const librarySchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    book: {
      type: Types.ObjectId,
      ref: "Book",
      required: true,
    },
    shelf: {
      type: String,
      enum: ["want", "reading", "read"],
      required: true,
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

// same book only once per user
librarySchema.index({ user: 1, book: 1 }, { unique: true });

export const Library = model("Library", librarySchema);
