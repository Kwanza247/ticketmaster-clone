import mongoose from "mongoose";

const transferSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    ticketIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
      },
    ],

    recipientFirstName: {
      type: String,
      required: true,
    },

    recipientLastName: {
      type: String,
      required: true,
    },

    recipientEmail: String,

    recipientPhone: String,

    note: String,

    status: {
      type: String,
      enum: ["COMPLETED", "FAILED"],
      default: "COMPLETED",
    },
  },
  {
    timestamps: true,
  }
);

const Transfer = mongoose.model(
  "Transfer",
  transferSchema
);

export default Transfer;