import CartSidebar from "./CartSidebar ";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import arrow from "../assets/arrow.svg"
import arrowRight from "../assets/arrowRight.svg"
import menu from "../assets/menu.svg"
import Logo from "../assets/Logo.svg"
import searchIcon from "../assets/searchIcon.svg"

// eslint-disable-next-line react/prop-types
export function Side({logo,contact,cart,palce,LogoAdidas,toggleSidebar,cartNav,cartCount,Wishlist,LoginImg,isSidebarOpen,handleRemoveItem,cartItems,
}) {
  return (
    <div>
      <div className="line__Top  ">
        <div className="line__top-right" >
          <img  src={menu} className="menuIcon" alt="" />
          <img className="Logo" src={Logo} alt="" />
        </div>

        <div>
          <p className="sideTop">
            <img src={arrow} width="10px" alt="" />
            Valentine’s Day Offers! Buy Two Get One Free <b> Shop Now</b>
            <img src={arrowRight} alt="" />
          <span></span>
          </p>
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
            <img src={searchIcon} alt="" className="icon__search" />
          </form>
          <Link className="logo" to="/">
            <img src={LogoAdidas} alt="" />
          </Link>
          <ul className="nav-links">
            <li className="nav-item">
              <Link className="nav-link" onClick={toggleSidebar}>
                <div className="cart-icon">
                  <img src={cartNav} alt="" />
                  {cartCount > 0 ? (
                    <span className="cart-count">{cartCount}</span>
                  ) : (
                    <span className="cart-count">0</span>
                  )}
                </div>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <img src={Wishlist} alt="" />
                Wishlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <img src={LoginImg} alt="" />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <CartSidebar
        isOpen={isSidebarOpen}
        handleRemoveItem={handleRemoveItem}
        toggleSidebar={toggleSidebar}
        cartItems={cartItems}
      />

      <div className="menu">
        <div className="menu-item best-sellers">Men</div>
        <div className="menu-item best-sellers">Women</div>
        <div className="menu-item best-sellers">Kids</div>
        <div className="menu-item best-sellers">Best Sellers</div>
        <div className="menu-item best-sellers">New Arrivals</div>
        <div className="menu-item offer">Offer</div>
      </div>

      <div>
        <p className="url__product" >
          <p style={{textDecoration:"underline"}}>
            
          Men 
          </p>
          
          / 
          <p style={{textDecoration:"underline"}}>

          Clothing 
          </p>
          
          /
          <p style={{textDecoration:"underline"}}>

           Tops
           </p>

           /
           <p style={{textDecoration:"underline"}}>

            Adidas
            </p>

            /
          <p>

           Adidas Black T-Shirt
          </p>
        </p>
      </div>
    </div>
  );
}
