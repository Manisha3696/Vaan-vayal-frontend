import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-1.png'
import '../../Css/Style.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Company Logo" height="75" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav gap-4">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/product1">Spices</Link></li>
                                <li><Link className="dropdown-item" to="/rice">Rice</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Flours</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Appalam</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Masala Powder</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Oil</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Jaggery</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Aval & Pori</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Salt</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Pickel</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Rice Paste</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Rava & Soya Chunks</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Snacks</Link></li>
                                <li><Link className="dropdown-item" to="/product3">Flower</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/globalbuyers">Global Buyers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
