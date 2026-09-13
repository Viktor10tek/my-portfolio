import mongoose, { Schema, Document } from "mongoose";

export interface IContactMessage extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const contactMessageSchema = new Schema<IContactMessage>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true,
  },
);

const ContactMessage = mongoose.model<IContactMessage>(
  "ContactMessage",
  contactMessageSchema,
);

export default ContactMessage;
