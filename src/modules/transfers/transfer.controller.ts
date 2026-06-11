import { Response } from "express";

import transferService from "./transfer.service";
import asyncHandler from "../../utils/asyncHandler";

const transferTickets = asyncHandler(
  async (
    req: any,
    res: Response
  ) => {
    const transfer =
      await transferService.transferTickets(
        req.user.userId,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "Tickets transferred successfully",
      data: transfer,
    });
  }
);

export default {
  transferTickets,
};