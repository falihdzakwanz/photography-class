import { ReactNode } from 'react';
import { FiChevronDown, FiChevronUp, FiGlobe } from 'react-icons/fi';
import SidebarLink from './SidebarLink';

interface MenuItem {
    label: string;
    icon: ReactNode;
    href: string;
}
interface Proptypes {
    isOpen: boolean;
    isWebsiteOpen: boolean;
    setIsWebsiteOpen: (isWebsiteOpen: boolean) => void;
    menuItems: MenuItem[];
}

const Sidebar = (props: Proptypes) => {
    const { isOpen, isWebsiteOpen, setIsWebsiteOpen, menuItems } = props;
    return (
        <aside
            className={`fixed left-0 top-0 z-40 h-screen w-[250px] transition-transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } bg-[#464B5E] text-color-white transition-all duration-300`}
        >
            <div className="flex h-[80px] items-center bg-[#2B2E3C] px-4">
                <h1 className="text-white text-2xl font-bold">
                 ADMIN
                </h1>
            </div>

            <div>
                <button
                    onClick={() => setIsWebsiteOpen(!isWebsiteOpen)}
                    className="flex w-full cursor-pointer items-center justify-between bg-[#7166BA] px-4 py-4 transition-colors hover:bg-[#6357AB]"
                >
                    <div className="flex items-center gap-3">
                        <FiGlobe className="text-white h-5 w-5" />
                        <span className="text-white text-sm">WEBSITE</span>
                    </div>
                    {isWebsiteOpen ? (
                        <FiChevronUp className="text-white h-5 w-5" />
                    ) : (
                        <FiChevronDown className="text-white h-5 w-5" />
                    )}
                </button>

                <div
                    className={`transition-all duration-300 ${isWebsiteOpen ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'}`}
                >
                    {menuItems.map((item) => (
                        <SidebarLink
                            key={item.label}
                            label={item.label}
                            href={item.href}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;