require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend domain
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // Increase the limit for development
});
app.use(limiter);


app.use(express.json()); // Parse JSON request bodies

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REDIRECT_URI = process.env.REDIRECT_URI;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Enhanced input validation function
function validateInput(data) {
    const { firstName, lastName, email, subject, message } = data;

    // Check if all fields are present
    if (!firstName || !lastName || !email || !subject || !message) {
        return 'All fields are required';
    }

    // Check field lengths
    if (firstName.length > 50) {
        return 'First name must be less than 50 characters';
    }
    if (lastName.length > 50) {
        return 'Last name must be less than 50 characters';
    }
    if (subject.length > 100) {
        return 'Subject must be less than 100 characters';
    }
    if (message.length > 1000) {
        return 'Message must be less than 1000 characters';
    }

    // Validate email format
    if (!validateEmail(email)) {
        return 'Invalid email address';
    }

    return null; // No validation errors
}

app.post('/send-email', async (req, res) => {
    const validationError = validateInput(req.body);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    const { firstName, lastName, email, subject, message } = req.body;

    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'unnamedxd78@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from: 'BAP PHOTOGRAPHY CONTACT <unnamedxd78@gmail.com>',
            to: 'hamka.122140121@student.itera.ac.id',
            subject: subject,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
            html: `<h1>Name: ${firstName} ${lastName}</h1><p>Email: ${email}</p><p>Message: ${message}</p>`,
        };

        const result = await transport.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!', result });
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});