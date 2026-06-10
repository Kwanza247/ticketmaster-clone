import { Response } from "express";

import dashboardService from "./dashboard.service";

const getMyEvents = async (
  req: any,
  res: Response
) => {
  try {
    const events =
      await dashboardService.getMyEvents(
        req.user.userId
      );

    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  getMyEvents,
};