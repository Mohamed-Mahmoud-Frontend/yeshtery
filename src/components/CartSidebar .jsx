import './CartSidebar.css';

// eslint-disable-next-line react/prop-types
const CartSidebar = ({ isOpen, toggleSidebar, cartItems, handleRemoveItem }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Cart</h2>
        <button className="close-btn" onClick={toggleSidebar}>
        </button>
      </div>
      <div className="sidebar-content">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <div>
                  <button onClick={() => handleRemoveItem(item)}>Remove</button>
                </div>
              </li>
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
