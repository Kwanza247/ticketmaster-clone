import { Request, Response } from "express";
import userService from "./user.service";
import asyncHandler from "../../utils/asyncHandler";

const createUser = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const {
      username,
      password,
      role,
    } = req.body;

    const user =
      await userService.createUser(
        username,
        password,
        role
      );

    res.status(201).json({
      success: true,
      message:
        "User created successfully",
      data: user,
    });
  }
);

export default {
  createUser,
};