import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



const NavBar = () => {
    

    return (
        <nav>
            <div className="navbar bg-accent">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">Next App</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mr-1'><Link href="/users">Users</Link></li>
                        <li className='mr-1'><Link href="/products">Products</Link></li>
                        <li><Link href="/admin">Admin</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar