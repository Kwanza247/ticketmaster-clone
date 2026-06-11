import { Response } from "express";

import ticketService from "./ticket.service";
import asyncHandler from "../../utils/asyncHandler";

const createTicket = asyncHandler(
  async (
    req: any,
    res: Response
  ) => {
    const payload = {
      ...req.body,

      ownerId: req.user.userId,
    };

    const ticket =
      await ticketService.createTicket(
        payload
      );

    res.status(201).json({
      success: true,
      message:
        "Ticket created successfully",
      data: ticket,
    });
  }
);

const getMyTickets = asyncHandler(
  async (
    req: any,
    res: Response
  ) => {
    const tickets =
      await ticketService.getMyTickets(
        req.user.userId
      );

    res.status(200).json({
      success: true,
      data: tickets,
    });
  }
);

const getSingleTicket = async (
  req: any,
  res: Response
) => {
  try {
    const ticket =
      await ticketService.getSingleTicket(
        req.params.id,
        req.user.userId
      );

    res.status(200).json({
      success: true,
      data: ticket,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTicket = async (
  req: any,
  res: Response
) => {
  try {
    const ticket =
      await ticketService.updateTicket(
        req.params.id,
        req.user.userId,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "Ticket updated successfully",
      data: ticket,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteTicket = async (
  req: any,
  res: Response
) => {
  try {
    await ticketService.deleteTicket(
      req.params.id,
      req.user.userId
    );

    res.status(200).json({
      success: true,
      message:
        "Ticket deleted successfully",
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  createTicket,

  getMyTickets,

  getSingleTicket,

  updateTicket,

  deleteTicket,
};