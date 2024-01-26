'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Users', href: '/users' },
        { label: 'Products', href: '/products' },
        { label: 'Admin', href: '/admin' },
        { label: 'Blog', href: '/blog' }
    ]
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-xxl">
                <a className="navbar-brand" href="#">Next App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {links.map(link =>
                            <li key={link.href} className="nav-item">
                                <Link className={`${link.href === currentPath ? 'active' : ''} nav-link`} href={link.href}>{link.label}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar