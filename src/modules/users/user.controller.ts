import { Request, Response } from "express";
import userService from "./user.service";

const createUser = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      username,
      password,
      role,
    } = req.body;

    const user = await userService.createUser(
      username,
      password,
      role
    );

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  createUser,
};