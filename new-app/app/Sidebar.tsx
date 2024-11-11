'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const currentPath = usePathname();

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Users', href: '/users' },
        { label: 'Products', href: '/products' },
        { label: 'Styleguide', href: '/styleguide' },
        { label: 'Blog', href: '/blog' }
    ]

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
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