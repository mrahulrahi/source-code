import Image from 'next/image'

const NavBar = () => {

    return (
        <header>
            <div className="container-fluid">
                <div className="navbar d-flex align-items-center justify-content-between">
                    <a className="navbar-title" href="#">Online Library Management</a>
                    <div className="navbar-logo"><Image src="/logo.png" alt="logo" width={300} height={100} quality={100} /></div>
                </div>
            </div>
        </header>
    )
}

export default NavBar