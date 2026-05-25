import Ticket from "./ticket.model";

import generateBarcode from "../../utils/generateBarcode";

import generateTicketNumber from "../../utils/generateTicketNumber";

import generateOrderNumber from "../../utils/generateOrderNumber";

const createTicket = async (
  payload: any
) => {
  const ticket = await Ticket.create({
    ...payload,

    barcode: generateBarcode(),

    ticketNumber:
      generateTicketNumber(),

    orderNumber:
      generateOrderNumber(),
  });

  return ticket;
};

const getMyTickets = async (
  ownerId: string
) => {
  const tickets = await Ticket.find({
    ownerId,
  })
    .populate("eventId")
    .sort({
      createdAt: -1,
    });

  return tickets;
};

const getSingleTicket = async (
  ticketId: string,
  ownerId: string
) => {
  const ticket = await Ticket.findOne({
    _id: ticketId,
    ownerId,
  }).populate("eventId");

  if (!ticket) {
    throw new Error("Ticket not found");
  }

  return ticket;
};

const updateTicket = async (
  ticketId: string,
  ownerId: string,
  payload: any
) => {
  const ticket =
    await Ticket.findOneAndUpdate(
      {
        _id: ticketId,
        ownerId,
      },
      payload,
      {
        new: true,
      }
    );

  if (!ticket) {
    throw new Error("Ticket not found");
  }

  return ticket;
};

const deleteTicket = async (
  ticketId: string,
  ownerId: string
) => {
  const ticket =
    await Ticket.findOneAndDelete({
      _id: ticketId,
      ownerId,
    });

  if (!ticket) {
    throw new Error("Ticket not found");
  }

  return ticket;
};

export default {
  createTicket,

  getMyTickets,

  getSingleTicket,

  updateTicket,

  deleteTicket,
};