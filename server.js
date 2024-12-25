import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle contact form submission
app.post('/contact', (req, res) => {
  const { fullname, email, message } = req.body;

  // Log environment variables and form data for debugging
  console.log("Email User: ", process.env.EMAIL_USER);
  console.log("Recipient Email: ", email);

  // Validate recipient email
  if (!email) {
    console.error('Recipient email is not provided in the form');
    return res.status(400).send('Recipient email is required');
  }

  // Configure email transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Your Gmail email
      pass: process.env.EMAIL_PASS,  // App-specific password
    },
  });

  // Setup email data
  const mailOptions = {
    from: `"${fullname}" <${email}> `, // Sender's email with their name
    to: process.env.EMAIL_USER,  // Recipient email from form
    replyTo: email,  // Sender's email address for replies
    subject: `New message from ${fullname}`,  // Email subject
    text: `You have received a message from ${fullname} (${email}):\n\n${message}`,  // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
