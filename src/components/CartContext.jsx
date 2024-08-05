import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.key === product.key && item.size === product.size
      );

      if (existingItemIndex >= 0) {
        // Item already exists; update the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + product.quantity,
        };
        return updatedItems;
      } else {
        // New item; add to cart
        return [...prevItems, { ...product, quantity: product.quantity }];
      }
    });
  };

  const removeFromCart = (key, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.key !== key || item.size !== size)
    );
  };

  const updateQuantity = (key, size, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.key === key && item.size === size) {
          return { ...item, quantity };
        }
        return item;
      });
      return updatedItems.filter((item) => item.quantity > 0);
    });
  };

  const getTotalItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
