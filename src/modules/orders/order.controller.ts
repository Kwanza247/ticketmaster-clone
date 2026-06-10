import { Response } from "express";

import orderService from "./order.service";

const getOrderDetails = async (
  req: any,
  res: Response
) => {
  try {
    const data =
      await orderService.getOrderDetails(
        req.params.id,
        req.user.userId
      );

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  getOrderDetails,
};