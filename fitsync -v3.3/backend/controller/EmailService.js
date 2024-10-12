const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a transporter using SMTP transport for Outlook
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // Outlook SMTP server
  port: 587, // Port for secure TLS
  secure: false, // Use TLS
  auth: {
    user: process.env.userm, // Your Outlook email address
    pass: process.env.passwm, // Your Outlook password
  },
});

module.exports = transporter;
