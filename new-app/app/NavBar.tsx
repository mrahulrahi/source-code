'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { link } from 'fs'

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
        <nav>
            <div className="navbar bg-accent fixed h-20 z-10">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">Next App</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links.map(link =>
                            <li key={link.href} className='mr-1'><Link className={`${link.href === currentPath ? 'active' : ''}`} href={link.href}>{link.label}</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar