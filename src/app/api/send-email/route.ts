import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import rateLimit from 'express-rate-limit';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

// Setup Google OAuth2
const CLIENT_ID = process.env.CLIENT_ID as string;
const CLIENT_SECRET = process.env.CLIENT_SECRET as string;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN as string;
const REDIRECT_URI = process.env.REDIRECT_URI as string;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Email validation function
function validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Input validation function
function validateInput(data: any): string | null {
    const { firstName, lastName, email, subject, message } = data;

    if (!firstName || !lastName || !email || !subject || !message) {
        return 'All fields are required';
    }

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

    if (!validateEmail(email)) {
        return 'Invalid email address';
    }

    return null;
}

// Rate limit middleware (limit to 5 requests per 15 minutes)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit to 5 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
    statusCode: 429,
});

// Apply rate limiting at the beginning of the POST function
export async function POST(req: Request) {
    // Manually apply rate limiting (it won't work natively without express, but you can trigger it like this)
    const res = NextResponse.next(); // Initialize the response
    limiter(req as any, res as any, () => {});

    // Now proceed with the actual email sending logic
    try {
        const body = await req.json();

        const validationError = validateInput(body);
        if (validationError) {
            return NextResponse.json({ message: validationError }, { status: 400 });
        }

        // Create a jsdom instance for the server-side environment
        const { firstName, lastName, email, subject, message } = body;
        const window = new JSDOM('').window;
        const purify = DOMPurify(window);  // Use the server-side DOMPurify with jsdom

        // Sanitize the subject and message
        const sanitizedSubject = purify.sanitize(subject); // Sanitize subject
        const sanitizedMessage = purify.sanitize(message); // Sanitize message

        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'unnamedxd78@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token,
            },
        });

        const mailOptions = {
            from: 'BAP PHOTOGRAPHY CONTACT <unnamedxd78@gmail.com>',
            to: 'hamka.122140121@student.itera.ac.id',
            subject: sanitizedSubject, // Use sanitized subject
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${sanitizedMessage}`, // Use sanitized message
            html: `<h1>Name: ${firstName} ${lastName}</h1><p>Email: ${email}</p><p>Message: ${sanitizedMessage}</p>`, // Use sanitized message
        };

        const result = await transport.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!', result });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
