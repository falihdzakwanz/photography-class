import Link from "next/link"

interface NavLink {
    href: string;
    title: string;
}
const NavLink = ({ href, title }: NavLink) => {
    return (
        <Link href={href} className="block text-base py-2 transition-all duration-300 hover:text-secondary md:text-lg lg:text-xl">{title}</Link>
    )
}

export default NavLink;