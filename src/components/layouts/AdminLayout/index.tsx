"use client"

import AuthenticatedNavbar from '@/components/fragments/Navbar/AuthenticatedNavbar';
import Sidebar from '@/components/fragments/Sidebar';
import { useState } from 'react';
import { FiEdit, FiBook } from 'react-icons/fi';

interface Props {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isWebsiteOpen, setIsWebsiteOpen] = useState(true);

    const menuItems = [
        {
            label: 'WORKSHOPS',
            icon: <FiEdit className="h-5 w-5" />,
            href: '/admin/workshops',
        },
        {
            label: 'DOCUMENTATION',
            icon: <FiBook className="h-5 w-5" />,
            href: '/admin/documentation',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <Sidebar
                isOpen={isOpen}
                isWebsiteOpen={isWebsiteOpen}
                setIsWebsiteOpen={setIsWebsiteOpen}
                menuItems={menuItems}
            />

            <div
                className={`${isOpen ? 'ml-[250px]' : 'ml-0'} min-h-screen transition-all duration-300`}
            >
                <AuthenticatedNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

                <main className="min-h-[calc(100vh-144px)] bg-[#E5E5E5]">
                    {children}
                </main>
            </div>
        </div>
    );
}
