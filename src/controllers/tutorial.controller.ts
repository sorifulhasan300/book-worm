import { Request, Response } from "express";
import { Tutorial } from "../models/Tutorial";

export const createTutorial = async (req: any, res: Response) => {
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
