import { Request, Response } from "express";
import Review from "../models/Review";
import Book from "../models/Book";
import User from "../models/User";

export const addReview = async (req: any, res: Response) => {
  const { bookId, rating, review } = req.body;
  console.log(bookId, req.user);

  // 1 Book exists?
  const book = await Book.findById(bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  //  User exists? (optional but good)
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ message: "Invalid user" });
  }
  const reviewExist = await Review.findOne({
    user: req.user.id,
    book: bookId,
  });
  if (reviewExist) {
    return res.status(400).json({
      message: "You have already reviewed this book",
    });
  }
  const result = await Review.create({
    user: req.user.id,
    book: bookId,
    rating,
    review,
    status: "pending",
  });
  res.status(201).json(result);
};
export const approveReview = async (req: Request, res: Response) => {
  const review = await Review.findByIdAndUpdate(
    req.params.id,
    { status: "approved" },
    { new: true }
  );
  res.json(review);
};
