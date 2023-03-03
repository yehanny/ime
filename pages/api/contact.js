import nodemailer from "nodemailer";

export default function handler(req, res) {
  const message = {
    from: req.body.email,
    to: process.env.SMTP2GO_EMAIL,
    subject: `Message From ${req.body.fullname}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
  };

  const transporter = nodemailer.createTransport({
    port: process.env.SMTP2GO_PORT,
    host: process.env.SMTP2GO_SERVER,
    auth: {
      user: process.env.SMTP2GO_USER,
      pass: process.env.SMTP2GO_PASSWORD,
    },
    secure: true,
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
