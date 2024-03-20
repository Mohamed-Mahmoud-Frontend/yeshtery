import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import cartNav from "../../assets/cartNav.svg";
import Wishlist from "../../assets/Wishlist.svg";
import LoginImg from "../../assets/Login.svg";
import LogoAdidas from "../../assets/LogoAdidas.svg";
import "../../App.css";
import logo from "../../assets/brand-logo-yellow.svg";
import cart from "../../assets/cart.svg";
import contact from "../../assets/contact.svg";
import palce from "../../assets/palce.svg";
import CartSidebar from "../CartSidebar ";
const NavBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 2 },
    { id: 2, name: 'Product 2', quantity: 1 },
  ]);
  const handleRemoveItem = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalCount);
  }, [cartItems]);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="line__Top h-20 ">
        <div className="line__top-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-6 h-6"
            width={35}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <img src={logo} alt="" />
        </div>

        <div>
          <p>
            Valentine’s Day Offers! Buy Two Get One Free <b> Shop Now</b>
          </p>
          <span></span>
        </div>

        <div className="line__Top-icons">
          <div className="line__Top-icon">
            <img src={contact} alt="" />
            <b>Contact Us</b>
          </div>
          <div className="line__Top-icon">
            <img src={cart} alt="" />
            <b>Track Order</b>
          </div>
          <div className="line__Top-icon">
            <img src={palce} alt="" />
            <b>Find A Store</b>
          </div>
        </div>
      </div>




      <nav className="navbar">
      <div className="container">
        <form className="search-form">
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <IoMdSearch className="icon__search" />
        </form>
        <Link className="logo" to="/">
          <img src={LogoAdidas} alt="" />
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link className="nav-link" onClick={toggleSidebar}>
              <div className="cart-icon">
                <img src={cartNav} alt="" />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </div>
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/wishlist">
              <img src={Wishlist} alt="" />
              Wishlist
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <img src={LoginImg} alt="" />
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    {/* Render the CartSidebar component */}
    <CartSidebar isOpen={isSidebarOpen} handleRemoveItem={handleRemoveItem} toggleSidebar={toggleSidebar} cartItems={cartItems} />

    <div className="menu">
    <div className="menu-item">Men</div>
    <div className="menu-item">Women</div>
    <div className="menu-item">Kids</div>
    <div className="menu-item best-sellers">Best Sellers</div>
    <div className="menu-item new-arrivals">New Arrivals</div>
    <div className="menu-item offer">Offer</div>
  </div>

    </div>
  );
};

export default NavBar;
