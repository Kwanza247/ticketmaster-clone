import { Request, Response, NextFunction } from "express";

const roleMiddleware = (
  ...roles: string[]
) => {
  return (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden",
      });
    }

    next();
  };
};

export default roleMiddleware;