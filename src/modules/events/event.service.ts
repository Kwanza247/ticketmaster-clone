import Event from "./event.model";

const createEvent = async (
  payload: any
) => {
  const event = await Event.create(payload);

  return event;
};

const getMyEvents = async (
  ownerId: string
) => {
  const events = await Event.find({
    ownerId,
  }).sort({
    createdAt: -1,
  });

  return events;
};

const getSingleEvent = async (
  eventId: string,
  ownerId: string
) => {
  const event = await Event.findOne({
    _id: eventId,
    ownerId,
  });

  if (!event) {
    const error: any = new Error(
      "Event not found"
    );

    error.statusCode = 404;

    throw error;
  }

  return event;
};

const updateEvent = async (
  eventId: string,
  ownerId: string,
  payload: any
) => {
  const event =
    await Event.findOneAndUpdate(
      {
        _id: eventId,
        ownerId,
      },
      payload,
      {
        new: true,
      }
    );

  if (!event) {
    const error: any = new Error("Event not found");
    error.statusCode = 404;
    throw error;
  }

  return event;
};

const deleteEvent = async (
  eventId: string,
  ownerId: string
) => {
  const event =
    await Event.findOneAndDelete({
      _id: eventId,
      ownerId,
    });

  if (!event) {
    const error: any = new Error(
      "Event not found"
    );

    error.statusCode = 404;

    throw error;
  }

  return event;
};

export default {
  createEvent,
  getMyEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};