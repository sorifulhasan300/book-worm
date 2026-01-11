import { Request, Response } from "express";
import Review from "../models/Review";

export const addReview = async (req: any, res: Response) => {
  const review = await Review.create({
    user: req.user.id,
    book: req.body.bookId,
    rating: req.body.rating,
    text: req.body.text,
  });
  res.status(201).json(review);
};

export const approveReview = async (req: Request, res: Response) => {
  const review = await Review.findByIdAndUpdate(
    req.params.id,
    { status: "approved" },
    { new: true }
  );
  res.json(review);
};
