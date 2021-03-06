import React from 'react'

const MobileNavbar = ({ currentPage, handlePageChange }) => {

  return (
    <>
      <div className="mobile__navigation">
        <ul className="navigation__links-mobile">
          <a className="linkStyles-mobile" href="#About"
            onClick={() => handlePageChange('About')}><li className={currentPage === "About" ? "navigationStylesActive" : "navigationStyles"}>About</li></a>
          <a className="linkStyles-mobile" href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}><li className={currentPage === "Portfolio" ? "navigationStylesActive" : "navigationStyles"}>Portfolio</li></a>
          <a className="linkStyles-mobile" href="#Contact"
            onClick={() => handlePageChange('Contact')}><li className={currentPage === "Contact" ? "navigationStylesActive" : "navigationStyles"}>Contact</li></a>
          <a className="linkStyles-mobile" href="#Resume"
            onClick={() => handlePageChange('Resume')}><li className={currentPage === "Resume" ? "navigationStylesActive" : "navigationStyles"}>Resume</li></a>
        </ul>
      </div>
  </>
  )
}

export default MobileNavbar