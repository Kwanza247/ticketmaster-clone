import { Request, Response } from "express";
import authService from "./auth.service";

const login = async (
  req: Request,
  res: Response
) => {
  try {
    const { username, password } = req.body;

    const data = await authService.loginUser(
      username,
      password
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data,
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  login,
};