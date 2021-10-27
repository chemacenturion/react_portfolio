import React from 'react';
import Navbar from '../components/Navbar';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import MobileNav from './MobileNav';
import { MdOutlineClose } from 'react-icons/md'

const Header = ({ currentPage, handlePageChange}) => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon =   <FaBars 
                            className="mobile-icon"
                            onClick={() => setOpen(!open)}
                            />

    const closeIcon =   <MdOutlineClose
                        className="mobile-icon"
                        onClick={() => setOpen(!open)}
                        />

    return (
        <>
        <nav className="navigation">
            <header className="header">José María Centurión</header>
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {open ? closeIcon : hamburgerIcon}
            {open && <MobileNav currentPage={currentPage} handlePageChange={handlePageChange} />}
        </nav>
        </>
    )
}

export default Header