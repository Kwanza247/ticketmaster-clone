import Ticket from "./ticket.model";

import generateBarcode from "../../utils/generateBarcode";

import generateTicketNumber from "../../utils/generateTicketNumber";

import generateOrderNumber from "../../utils/generateOrderNumber";
import Order from "../orders/order.model";

const createTicket = async (
  payload: any
) => {
  const {
    ownerId,
    eventId,

    ticketCount,

    firstName,
    lastName,

    email,
    phoneNumber,

    ticketType,

    section,
    row,

    startingSeat,

    seatLocation,
  } = payload;

  const orderNumber =
    generateOrderNumber();

  const order = await Order.create({
    ownerId,

    eventId,

    orderNumber,

    ticketCount,
  });

  const tickets = [];

  for (
    let i = 0;
    i < ticketCount;
    i++
  ) {
    const ticket =
      await Ticket.create({
        ownerId,

        eventId,

        orderId: order._id,

        firstName,
        lastName,

        email,
        phoneNumber,

        ticketType,

        section,

        row,

        seat: (
          Number(startingSeat) +
          i
        ).toString(),

        seatLocation,

        orderNumber,

        barcode:
          generateBarcode(),

        ticketNumber:
          generateTicketNumber(),
      });

    tickets.push(ticket);
  }

  return {
    order,
    tickets,
  };
};

const getMyTickets = async (
  ownerId: string
) => {
  const tickets = await Ticket.find({
    ownerId,
    status: "ACTIVE",
  })
    .populate("eventId")
    .populate("orderId")
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
  }).populate("eventId")
    .populate("orderId");

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