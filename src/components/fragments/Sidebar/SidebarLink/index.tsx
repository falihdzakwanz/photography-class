import Link from 'next/link';
import { ReactNode } from 'react';

interface MenuItem {
    label: string;
    icon: ReactNode;
    href: string;
}

const SidebarLink = (props: MenuItem) => {
    const { href, label, icon } = props;

    return (
        <Link
            key={label}
            href={href}
            className="text-white flex items-center gap-3 px-4 py-3 text-sm uppercase transition-colors hover:bg-[#5B6179]"
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
};

export default SidebarLink;