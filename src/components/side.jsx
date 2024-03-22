import CartSidebar from "./CartSidebar ";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
export function Side({
  logo,
  contact,
  cart,
  palce,
  LogoAdidas,
  toggleSidebar,
  cartNav,
  cartCount,
  Wishlist,
  LoginImg,
  isSidebarOpen,
  handleRemoveItem,
  cartItems
}) {
  return <div>
    <div className="line__Top  ">
    <div className="line__top-right">
    <svg xmlns="http://www.w3.org/2000/svg" className="max-w-6 h-6" width={35} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
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
            <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
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
                {cartCount > 0 ? <span className="cart-count">{cartCount}</span> : <span className="cart-count">0</span> }
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

      <CartSidebar isOpen={isSidebarOpen} handleRemoveItem={handleRemoveItem} toggleSidebar={toggleSidebar} cartItems={cartItems} />

      <div className="menu">
        <div className="menu-item">Men</div>
        <div className="menu-item">Women</div>
        <div className="menu-item">Kids</div>
        <div className="menu-item best-sellers">Best Sellers</div>
        <div className="menu-item new-arrivals">New Arrivals</div>
        <div className="menu-item offer">Offer

        </div>
        </div>

        <div>
        <p className="url__product">
        Men / Clothing / Tops / Adidas / Adidas Black T-Shirt
        </p>
        </div>
        </div>;
}
