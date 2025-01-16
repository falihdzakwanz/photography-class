"use client"

import { signOut } from 'next-auth/react';
import { FiLogOut, FiMenu } from 'react-icons/fi';

interface Proptypes {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const AuthenticatedNavbar = (props: Proptypes) => {
    const { setIsOpen, isOpen } = props;
    return (
        <nav className="flex h-[80px] items-center justify-between bg-admin-primary px-6">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-white transition-colors duration-200">
                <FiMenu className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => signOut()}
                    className="text-primary flex items-center px-4 py-2 md:text-lg lg:text-xl hover:text-white transition-colors duration-200"
                >
                    <FiLogOut className="mr-2 h-5 w-5" />
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default AuthenticatedNavbar;
