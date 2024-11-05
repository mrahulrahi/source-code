'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const currentPath = usePathname();

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Users', href: '/users' },
        { label: 'Products', href: '/products' },
        { label: 'Admin', href: '/admin' },
        { label: 'Blog', href: '/blog' }
    ]

    return (
        <aside className=" min-h-screen">
            <nav className="navbar-nav">
                <ul className="nav-menu d-flex flex-column">
                    {links.map(link =>
                        <li key={link.href} className="nav-item">
                            <Link className={`${link.href === currentPath ? 'active' : ''} nav-link`} href={link.href}>{link.label}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar