import { Request, Response } from "express";
import User from "../models/User";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};
export const updateUser = async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    role: req.body.role,
    new: true,
  });
  res.json({
    message: "User updated",
    user,
  });
};
