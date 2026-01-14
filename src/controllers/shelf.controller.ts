import { Library } from "../models/Library";

export const addToShelf = async (req: any, res: any) => {
  const { bookId, shelf } = req.body;

  const progress = shelf === "read" ? 100 : shelf === "want" ? 0 : 0;

  const item = await Library.create({
    user: req.user.id,
    book: bookId,
    shelf,
    progress,
  });

  res.status(201).json(item);
};
export const updateShelf = async (req: any, res: any) => {
  const { shelf } = req.body;

  const progress = shelf === "read" ? 100 : shelf === "want" ? 0 : undefined;

  const item = await Library.findOneAndUpdate(
    {
      _id: req.params.id,
      user: req.user.id,
    },
    {
      shelf,
      ...(progress !== undefined && { progress }),
    },
    { new: true }
  );

  res.json(item);
};
export const updateProgress = async (req: any, res: any) => {
  const { progress } = req.body;

  const item = await Library.findOneAndUpdate(
    {
      _id: req.params.id,
      user: req.user.id,
      shelf: "reading",
    },
    { progress },
    { new: true }
  );

  res.json(item);
};
export const myLibrary = async (req: any, res: any) => {
  const data = await Library.find({ user: req.user.id }).populate(
    "book",
    "title author coverImage"
  );

  const result = {
    want: data.filter((i) => i.shelf === "want"),
    reading: data.filter((i) => i.shelf === "reading"),
    read: data.filter((i) => i.shelf === "read"),
  };

  res.json(result);
};
