
import  { useState, useEffect, Suspense } from "react";

import axios from "axios";
import ReactStars from "react-rating-stars-component";
import logo from "../../assets/brand-logo-yellow.svg";
import Wishlist from "../../assets/Wishlist.svg";
import LoginImg from "../../assets/Login.svg";
import LogoAdidas from "../../assets/LogoAdidas.svg";
import cartNav from "../../assets/cartNav.svg";
import contact from "../../assets/contact.svg";
import palce from "../../assets/palce.svg";
import cart from "../../assets/cart.svg";
import Carousel from "../Carousel/MultipleItems";

import "../../App.css";
import { Side } from "../side";

const PageProduct = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([


  ]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/39")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const addToCart = () => {
    const item = {
      id: products.id,
      title: products.title,
      quantity: count,
      image: image,
      price: products.price,
    };
    setCartItems([...cartItems, item]);
    setCount(1);
  };


  const image = products?.images && products.images.length > 0 ? products.images[0] : null;
  const image1 = products?.images && products.images.length > 1 ? products.images[1] : null;

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleRemoveItem = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const totalCount = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartCount(totalCount);
  }, [cartItems]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="Main__page">
 <Side   logo={logo} contact={contact} cart={cart} palce={palce} LogoAdidas={LogoAdidas} toggleSidebar={toggleSidebar} cartNav={cartNav} cartCount={cartCount} Wishlist={Wishlist} LoginImg={LoginImg} isSidebarOpen={isSidebarOpen} handleRemoveItem={handleRemoveItem} cartItems={cartItems}  />
        <div>
      <div className="product" key={products.id}>
        <div className="product__images">

        <img src={image} alt="product image" />


        <div className="Carousel__style">
        <Suspense fallback={<div>Loading...</div>}>
          <Carousel />
        </Suspense>
      </div>
        </div>
        <div className="Details__product">
          <img src={LogoAdidas} alt="product image" />
          <strong>{products.description}</strong>
          <span>{products.title}</span>
          <div className="star__rating">
            <ReactStars
              value={products.rating}
              count={5}
              size={24}
              activeColor="#ffd700"
              inactiveColor="#cccccc"
              edit={false}
            />
            <p className="rating">
              {products.rating} of 5{" "}
              <span className="stock">{products.stock}</span>
            </p>
          </div>
          <span
            style={{
              color: "#542E90",
              fontSize: "30px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {products.price} LE{" "}
            <del
              style={{
                color: "#A7A9AC",
                fontSize: "20px",
              }}
            >
              {products.price} LE
            </del>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#FFF200",
                color: "#000000",
                fontSize: "15px",
                paddingInline: "5px",
              }}
            >
              30% Off
            </span>
          </span>
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexDirection: "column",
            }}
          >
            <div>
              <h3>Size</h3>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
              className="size__"
            >
              <p
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "1px solid #D9D9D9",
                  color: "#542E90",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                Small
              </p>
              <p
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "1px solid #D9D9D9",
                  color: "#542E90",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                Medium
              </p>
              <p
                style={{
                  background: "#ECECEC",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "1px solid #D9D9D9",
                  color: "#542E90",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                Large
              </p>
              <p
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "1px solid #D9D9D9",
                  color: "#542E90",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                X Large
              </p>
              <p
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "1px solid #D9D9D9",
                  color: "#542E90",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                XX Large
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexDirection: "column",
            }}
          >
            <div>
              <h3>Color</h3>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
              className="size__"
            >
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid #D9D9D9",
                  color: "#542E90",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
                src={image1}
                alt="image"
              />
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid #D9D9D9",
                  color: "#542E90",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
                src={image}
                alt="image"
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexDirection: "column",
            }}
          >
            <div>
              <h3>Quantity</h3>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
              className="size__"
            >
              <div className="buttons__count">
                <button className="button__count" onClick={decrementCount}>-</button>
                <span className="count">{count}</span>
                <button className="button__count" onClick={incrementCount}>+</button>
              </div>
            </div>
            <div className="buttons__cart">
              <button className="add__cart-Button" onClick={addToCart}>Add To Cart</button>
              <button className="Pickup-Button">Pickup From Store</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default PageProduct;
