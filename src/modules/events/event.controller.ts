import { Request, Response } from "express";

import eventService from "./event.service";

const createEvent = async (
  req: any,
  res: Response
) => {
  try {
    const payload = {
      ...req.body,

      ownerId: req.user.userId,
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
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyEvents = async (
  req: any,
  res: Response
) => {
  try {
    const events =
      await eventService.getMyEvents(
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

const getSingleEvent = async (
  req: any,
  res: Response
) => {
  try {
    const event =
      await eventService.getSingleEvent(
        req.params.id,
        req.user.userId
      );

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const updateEvent = async (
  req: any,
  res: Response
) => {
  try {
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
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

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