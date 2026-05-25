import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    ticketType: {
      type: String,
      required: true,
    },

    section: {
      type: String,
      required: true,
    },

    row: {
      type: String,
      required: true,
    },

    seat: {
      type: String,
      required: true,
    },

    seatLocation: {
      type: String,
      required: true,
    },

    orderNumber: {
      type: String,
      required: true,
    },

    ticketNumber: {
      type: String,
      required: true,
      unique: true,
    },

    barcode: {
      type: String,
      required: true,
      unique: true,
    },

    transferNote: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["ACTIVE", "TRANSFERRED"],
      default: "ACTIVE",
    },
  },
  {
    timestamps: true,
  }
);

ticketSchema.index(
  {
    eventId: 1,
    section: 1,
    row: 1,
    seat: 1,
  },
  {
    unique: true,
  }
);

const Ticket = mongoose.model(
  "Ticket",
  ticketSchema
);

export default Ticket;