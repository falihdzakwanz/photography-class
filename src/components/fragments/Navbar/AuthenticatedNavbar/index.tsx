import { signOut } from 'next-auth/react';
import { FiLogOut, FiMenu } from 'react-icons/fi';

interface Proptypes {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const AuthenticatedNavbar = (props: Proptypes) => {
    const { setIsOpen, isOpen } = props;
    return (
        <nav className="flex h-[80px] items-center justify-between bg-color-purple px-6 text-color-white">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                <FiMenu className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => signOut()}
                    className="text-white flex items-center px-4 py-2"
                >
                    <FiLogOut className="mr-2 h-5 w-5" />
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default AuthenticatedNavbar;
