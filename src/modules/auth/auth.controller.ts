import { Request, Response } from "express";
import authService from "./auth.service";
import asyncHandler from "../../utils/asyncHandler";
const login = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const { username, password } =
      req.body;

    const data =
      await authService.loginUser(
        username,
        password
      );

    res.status(200).json({
      success: true,
      message:
        "Login successful",
      data,
    });
  }
);

export default {
  login,
};