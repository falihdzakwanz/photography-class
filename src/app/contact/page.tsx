'use client';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { text } from "stream/consumers";

interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    ishovered: boolean;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, ishovered, handleMouseEnter, handleMouseLeave }) => {
    return (
        <button
            type="submit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: ishovered ? 'white' : 'black', color: ishovered ? 'black' : 'white' }}
            className='p-2 w-52 border border-gray-300 rounded'
            onClick={onClick}
        >
            Submit
        </button>
    );
};

const ContactPage: React.FC = () => {
    const [ishovered, setIshovered] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleMouseEnter = () => {
        setIshovered(true);
    };

    const handleMouseLeave = () => {
        setIshovered(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to send email');
            }
    
            const result = await response.json();
            toast.success('Email sent successfully!');
    
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            toast.error(`Failed to send email: ${(error as Error).message}`);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-w-screen min-h-screen max-h-screen max-w-screen bg-primary text-secondary">
                <div className="flex flex-col items-center justify-center mx-auto gap-10">
                    <h1 className='lg:text-4xl font-bold mt-8'>Contact Us</h1>
                    <form className="flex flex-col gap-4 w-full max-w-2xl" onSubmit={handleSubmit}>
                        <div className="flex gap-4">
                            <div className="flex flex-col flex-1">
                                <label htmlFor="firstName" className="mb-1">Firstname:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    required
                                    className="p-2 border border-gray-300 rounded bg-inherit"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <label htmlFor="lastName" className="mb-1">Lastname:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    required
                                    className="p-2 border border-gray-300 rounded bg-inherit"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                required
                                className="p-2 border border-gray-300 rounded bg-inherit"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="subject" className="mb-1">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                required
                                className="p-2 border border-gray-300 rounded bg-inherit"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="mb-1">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                required
                                className="p-2 border border-gray-300 rounded bg-inherit resize-none h-28"
                                onChange={handleChange}
                            />
                        </div>
                        <Button onClick={handleSubmit} ishovered={ishovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default ContactPage;