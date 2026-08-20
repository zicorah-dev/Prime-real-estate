import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "../context/CartContext";

function CartBadge() {
  const { cartCount } = useCart();

  return (
    <Link
      to="/cart"
      className="cart-badge-link"
      aria-label={`Shopping cart with ${cartCount} items`}
    >
      <FaShoppingCart />

      {cartCount > 0 && (
        <span className="cart-badge-count">
          {cartCount > 99
            ? "99+"
            : cartCount}
        </span>
      )}
    </Link>
  );
}

export default CartBadge;