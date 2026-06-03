import Order from "../orders/order.model";
import Ticket from "../tickets/ticket.model";

const validateTransfer = async (
  ownerId: string,
  orderId: string,
  ticketIds: string[],
  recipientName: string
) => {
  const order =
    await Order.findOne({
      _id: orderId,
      ownerId,
    });

  if (!order) {
    throw new Error(
      "Order not found"
    );
  }

  if (
    ticketIds.length !==
    order.ticketCount
  ) {
    throw new Error(
      `Error transferring to ${recipientName}. Only sending all ${order.ticketCount} tickets can go through.`
    );
  }

  const tickets =
    await Ticket.find({
      _id: { $in: ticketIds },
      ownerId,
      orderId,
    });

  if (
    tickets.length !==
    order.ticketCount
  ) {
    throw new Error(
      "Invalid ticket selection"
    );
  }

  return order;
};

export default validateTransfer;