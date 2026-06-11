import Order from "../orders/order.model";
import Ticket from "../tickets/ticket.model";
import Transfer from "./transfer.model";

const transferTickets = async (
    ownerId: string,
    payload: any
) => {
    const {
        orderId,
        ticketIds,
        firstName,
        lastName,
        email,
        phone,
        note,
    } = payload;

    const order = await Order.findOne({
        _id: orderId,
        ownerId,
    });

    if (!order) {
        const error: any = new Error(
            "Order not found"
        );

        error.statusCode = 404;

        throw error;
    }

    if (
        ticketIds.length !==
        order.ticketCount
    ) {
        const error: any = new Error(
            `Error transferring to ${firstName} ${lastName}. Only sending all ${order.ticketCount} tickets can go through.`
        );

        error.statusCode = 400;

        throw error;
    }

    const tickets = await Ticket.find({
        _id: { $in: ticketIds },
        ownerId,
        orderId,
    });

    if (
        tickets.length !==
        order.ticketCount
    ) {
        const error: any = new Error(
            "Invalid ticket selection."
        );

        error.statusCode = 400;

        throw error;
    }

    const transfer =
        await Transfer.create({
            senderId: ownerId,

            orderId,

            ticketIds,

            recipientFirstName:
                firstName,

            recipientLastName:
                lastName,

            recipientEmail: email,

            recipientPhone: phone,

            note,

            status: "COMPLETED",
        });

    await Ticket.updateMany(
        {
            _id: {
                $in: ticketIds,
            },

            ownerId,
        },
        {
            status: "TRANSFERRED",

            recipientFirstName:
                firstName,

            recipientLastName:
                lastName,

            recipientEmail: email,

            recipientPhone: phone,

            transferNote: note,
        }
    );
    return transfer;
};

export default {
    transferTickets,
};