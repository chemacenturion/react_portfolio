import React from 'react'

const Navbar = ({ currentPage, handlePageChange }) => {

  return (
    <>
      <div className="desktop__navigation">
        <ul className="navigation__links">
          <a className="linkStyles" href="#About"
            onClick={() => handlePageChange('About')}><li className={currentPage === "About" ? "navigationStylesActive" : "navigationStyles"}>About</li></a>
          <a className="linkStyles" href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}><li className={currentPage === "Portfolio" ? "navigationStylesActive" : "navigationStyles"}>Portfolio</li></a>
          <a className="linkStyles" href="#Contact"
            onClick={() => handlePageChange('Contact')}><li className={currentPage === "Contact" ? "navigationStylesActive" : "navigationStyles"}>Contact</li></a>
          <a className="linkStyles" href="#Resume"
            onClick={() => handlePageChange('Resume')}><li className={currentPage === "Resume" ? "navigationStylesActive" : "navigationStyles"}>Resume</li></a>
        </ul>
      </div>
  </>
  )
}

export default Navbar

