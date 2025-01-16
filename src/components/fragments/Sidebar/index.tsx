import { ReactNode } from 'react';
import SidebarLink from './SidebarLink';

interface MenuItem {
    label: string;
    icon: ReactNode;
    href: string;
}

interface Proptypes {
    isOpen: boolean;
    menuItems: MenuItem[];
}

const Sidebar = (props: Proptypes) => {
    const { isOpen, menuItems } = props;

    return (
        <aside
            className={`fixed left-0 top-0 z-40 h-screen w-[250px] transition-transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } bg-admin-accent text-primary transition-all duration-300`}
        >
            <div className="flex h-[80px] items-center justify-center bg-admin-primary px-4">
                <h1 className="text-2xl font-bold text-center">
                    ADMIN
                </h1>
            </div>

            <div>
                {menuItems.map((item) => (
                    <SidebarLink
                        key={item.label}
                        label={item.label}
                        href={item.href}
                        icon={item.icon}
                    />
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
