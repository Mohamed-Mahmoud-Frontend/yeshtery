import "./CartSidebar.css";

// eslint-disable-next-line react/prop-types
const CartSidebar = ({
  isOpen,
  toggleSidebar,
  cartItems,
  handleRemoveItem,
}) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2>Cart</h2>
        <div className="p-header-cart">
          <p onClick={toggleSidebar}>x</p>
        </div>
        <button className="close-btn" onClick={toggleSidebar}></button>
      </div>
      <div className="sidebar-content">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <div key={item.id}>
                <li>
                  <img
                    src={item.image}
                    style={{
                      borderRadius: "10px",
                    }}
                    width={"120px"}
                    height={"100px"}
                    alt=""
                  />


                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        color: "#1D1D1B",
                        fontWeight: "600",
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: "#3C3C3B",
                        fontWeight: "600",
                      }}
                    >
                      Quantity : {item.quantity}
                    </span>
                    <span
                      style={{
                        color: "#542E90",
                        fontWeight: "600",
                      }}
                    >
                      {item.price} LE
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <button
                      className="remove__button"
                      onClick={() => handleRemoveItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
                <div
                  style={{
                    textAlign: "center",
                    color: "#1D1D1B",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  Total: {total} LE
                </div>
                <div className="buttons__cart">
                  <button className="Pickup-Button ">Review Cart</button>
                  <button className="add__cart-Button">
                    Complete Checkout
                  </button>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
