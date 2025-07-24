// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <>
		<nav className="navbar navbar-expand-xl navbar-bg">
		<div className="container">			
			<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="offcanvas offcanvas-end bg-secondary" id="navbarOffcanvas"
			tabIndex="-1" aria-labelledby="offcanvasNavbarLabel">
			<div className="offcanvas-header">
			<button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div className="offcanvas-body">          
			<div className="navbar-nav justify-content-end flex-grow-1 pe-3">
				<a className="nav-item nav-link" aria-current="page" href="./#event-filter">Upcoming Event</a>
				<a className="nav-item nav-link" href="FAQ">FAQ</a>
				<a className="nav-item nav-link" href="Registration">Registration</a>
				{/*<a className="nav-item nav-link" href="#">Contact Us</a>
				<a className="nav-item nav-link" href="#">Support</a>
				 <li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					<i className="bi bi-person-circle"></i>
				</a>
				<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
					<li><a className="dropdown-item" href="#">Welcome Prachee</a></li>
					<li><a className="dropdown-item" href="#">Profile</a></li>
					<li><hr className="dropdown-divider" /></li>
					<li><a className="dropdown-item" href="#">Logout</a></li>
				</ul>
				</li> */}
			</div>
			</div>
			</div>  
		</div>
		</nav>
    </>
  );
};

export default Header;
