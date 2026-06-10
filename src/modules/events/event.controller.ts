import { Request, Response } from "express";

import eventService from "./event.service";
import asyncHandler from "../../utils/asyncHandler";

const createEvent = asyncHandler(
  async (
    req: any,
    res: Response
  ) => {
    const payload = {
      ...req.body,

      ownerId: req.user.userId,

      ticketImage: req.file
        ? (req.file as any).path
        : "",
    };

    const event =
      await eventService.createEvent(
        payload
      );

    res.status(201).json({
      success: true,
      message:
        "Event created successfully",
      data: event,
    });
  }
);

const getMyEvents = asyncHandler(
  async (
    req: any,
    res: Response
  ) => {
    const events =
      await eventService.getMyEvents(
        req.user.userId
      );

    res.status(200).json({
      success: true,
      data: events,
    });
  }
);

const getSingleEvent = asyncHandler(
  async (
    req: any,
    res: Response
  ) => {
    const event =
      await eventService.getSingleEvent(
        req.params.id,
        req.user.userId
      );

    res.status(200).json({
      success: true,
      data: event,
    });
  }
);

const updateEvent = asyncHandler(
  async (
    req: any,
    res: Response
  ) => {
    const event =
      await eventService.updateEvent(
        req.params.id,
        req.user.userId,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "Event updated successfully",
      data: event,
    });
  }
);
const deleteEvent = async (
  req: any,
  res: Response
) => {
  try {
    await eventService.deleteEvent(
      req.params.id,
      req.user.userId
    );

    res.status(200).json({
      success: true,
      message:
        "Event deleted successfully",
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  createEvent,
  getMyEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};