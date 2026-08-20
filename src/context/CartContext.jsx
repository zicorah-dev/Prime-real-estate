import { createContext, useContext, useEffect, useState, useMemo } from "react";


const CartContext = createContext();

const CART_STORAGE_KEY = "prime-estates-cart"


export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Unable to load cart:", error);

      return [];
    }
  });

  /*
   * Save cart whenever it changes.
   * This means the cart remains available
   * after refreshing the browser.
   */
  useEffect(() => {
    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error("Unable to save cart:", error);
    }
  }, [cartItems]);

  /*
   * Add a property to the cart.
   */
  const addToCart = (property) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === property.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === property.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...property,
          quantity: 1,
        },
      ];
    });
  };

  /*
   * Remove an item completely.
   */
  const removeFromCart = (propertyId) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== propertyId
      )
    );
  };

  /*
   * Increase quantity.
   */
  const increaseQuantity = (propertyId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === propertyId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  /*
   * Decrease quantity.
   * If quantity reaches zero, remove the item.
   */
  const decreaseQuantity = (propertyId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === propertyId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /*
   * Completely empty the cart.
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /*
   * Number of individual items.
   *
   * Example:
   * Property A × 2
   * Property B × 1
   *
   * cartCount = 3
   */
   const cartCount = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  }, [cartItems]);


  /*
   * Total price of everything in the cart.
   */
  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    );
  }, [cartItems]);

  /*
   * Check whether a particular property
   * is already in the cart.
   */
  const isInCart = (propertyId) => {
    return cartItems.some(
      (item) => item.id === propertyId
    );
  };

  const value = {
    cartItems,
    cartCount,
    cartTotal,

    addToCart,
    removeFromCart,

    increaseQuantity,
    decreaseQuantity,

    clearCart,

    isInCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/*
 * Custom hook for accessing the cart.
 */
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside a CartProvider"
    );
  }

  return context;
}

export default CartContext;