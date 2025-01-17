'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const currentPath = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Users', href: '/users' },
        { label: 'Products', href: '/products' },
        { label: 'Blog', href: '/blog' }
    ]

    return (
        <>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <nav className="sidebar-nav">
                    <ul className="nav-menu d-flex flex-column">
                        {links.map(link =>
                            <li key={link.href} className="nav-item">
                                <Link 
                                    className={`${link.href === currentPath ? 'active' : ''} nav-link`} 
                                    href={link.href} 
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </aside>

            <button className='sidebar-toggler btn-secondary d-md-none fs-3 border-0 rounded-2' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars /> } 
            </button>
        </>
    )
}

export default Sidebar