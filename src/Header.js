import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* search box */}
      <input type="text" className="header__searchInput"/>
      {/* 3 links */}
      {/* Basket Icon with number */}
    </nav>
  );
}

export default Header;
