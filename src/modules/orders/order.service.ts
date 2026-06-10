import Order from "./order.model";
import Ticket from "../tickets/ticket.model";

const getOrderDetails = async (
  orderId: string,
  ownerId: string
) => {
  const order = await Order.findOne({
    _id: orderId,
    ownerId,
  }).populate("eventId");

  if (!order) {
    throw new Error("Order not found");
  }

  const tickets = await Ticket.find({
    orderId,
    ownerId,
  }).sort({
    seat: 1,
  });

  return {
    order,
    tickets,
  };
};

export default {
  getOrderDetails,
};