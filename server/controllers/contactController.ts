import { Request, Response } from "express";
import Contact from "../models/Contact";

export const submitContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      message: "Message sent successfully ✅",
      contact: newContact,
    });
  } catch (error) {
    console.error("Error submitting contact:", error);

    res.status(500).json({
      message: "Failed to send message",
    });
  }
};
