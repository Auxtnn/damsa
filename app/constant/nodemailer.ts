import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
};
