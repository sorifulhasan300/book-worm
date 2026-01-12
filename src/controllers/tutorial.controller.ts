import { Request, Response } from "express";
import { Tutorial } from "../models/Tutorial";
import { Types } from "mongoose";
import Book from "../models/Book";
import User from "../models/User";

export const createTutorial = async (req: any, res: Response) => {
  if (req.body.book && !Types.ObjectId.isValid(req.body.book)) {
    return res.status(400).json({
      message: "Invalid book id format",
    });
  }
  const book = await Book.findById(req.body.book);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ message: "Invalid user" });
  }
  const tutorial = await Tutorial.create({
    title: req.body.title,
    youtubeUrl: req.body.youtubeUrl,
    book: req.body.book,
    createdBy: req.user.id,
  });

  res.status(201).json(tutorial);
};

export const getTutorials = async (req: Request, res: Response) => {
  const filter: any = {};
  if (req.query.bookId) filter.book = req.query.bookId;

  const tutorials = await Tutorial.find(filter)
    .populate("book", "title")
    .sort({ createdAt: -1 });

  res.json(tutorials);
};

export const deleteTutorial = async (req: Request, res: Response) => {
  await Tutorial.findByIdAndDelete(req.params.id);
  res.json({ message: "Tutorial deleted" });
};
