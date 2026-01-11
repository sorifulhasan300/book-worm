import { Request, Response } from "express";
import Genre from "../models/Genre";

export const createGenre = async (req: Request, res: Response) => {
  const genre = await Genre.create(req.body);
  res.status(201).json(genre);
};

export const getGenres = async (_: Request, res: Response) => {
  const genres = await Genre.find();
  res.json(genres);
};

export const updateGenre = async (req: Request, res: Response) => {
  const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(genre);
};

export const deleteGenre = async (req: Request, res: Response) => {
  await Genre.findByIdAndDelete(req.params.id);
  res.json({ message: "Genre deleted" });
};
