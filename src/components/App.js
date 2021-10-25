import React, { useState } from 'react';
import Header from './Header'
import '../css/app.css'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import Footer from './Footer'

export default function App() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') return <About />;
      if (currentPage === 'Portfolio') return <Portfolio />;
      if (currentPage === "Contact") return <Contact />;
      if (currentPage === 'Resume') return <Resume />;
      return <About />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </>
    );
  }