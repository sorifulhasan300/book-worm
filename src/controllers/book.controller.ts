import { Request, Response } from "express";
import Book from "../models/Book";

export const createBook = async (req: Request, res: Response) => {
  console.log(req.body);
  const book = await Book.create({
    ...req.body,
    coverImage: req.file?.path,
  });
  res.status(201).json(book);
};

export const getBooks = async (req: Request, res: Response) => {
  const bookId = req.params.id;
  if (bookId) {
    const book = await Book.findById(bookId).populate("genre");
    return res.json(book);
  }
  const books = await Book.find().populate("genre");
  res.json(books);
};

export const updateBook = async (req: Request, res: Response) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};
