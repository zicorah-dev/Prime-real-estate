import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    FaBars,
   FaTimes,
  FaShoppingCart,
  FaHome, 
} from "react-icons/fa";
import CartBadge from "./CartBadge";


function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

     return (
    <header className="navbar">

      <div className="navbar-container">

       

        <Link to="/" className="logo" onClick={closeMenu}>
          <FaHome className="logo-icon" />
          <span>Prime Estates</span>
        </Link>
     

        {/* Desktop Navigation */}

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/properties" onClick={closeMenu}>
            Properties
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

<CartBadge />
{/* 
          <Link to="/cart" className="cart-nav-link">
          <FaShoppingCart />
          Cart
          </Link> */}

        </nav>

        {/* Mobile Toggle */}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </header>
  );

}
export default Navbar;