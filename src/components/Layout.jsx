// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // If you're using React Router

const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <div className="main-content">        
        <div className="page-content">
          <Outlet /> {/* This renders the current route’s component */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
