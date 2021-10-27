import React from 'react';
import Navbar from '../components/Navbar';
import { FaBars } from 'react-icons/fa'

const Header = ({ currentPage, handlePageChange}) => {
    return (
        <>
        <nav className="navigation">
            <header className="header">José María Centurión</header>
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            <FaBars className="mobile-icon" />
        </nav>
        </>
    )
}

export default Header