import { Response } from "express";

import transferService from "./transfer.service";

const transferTickets = async (
  req: any,
  res: Response
) => {
  try {
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
  } catch (error: any) {
    res.status(400).json({
      success: false,

      title: "Transfer Error",

      message: error.message,
    });
  }
};

export default {
  transferTickets,
};