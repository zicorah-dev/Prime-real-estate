import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBed,
  FaBath,
  FaCar,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaMinus,
  FaPlus,
  FaRulerCombined,
  FaShoppingCart,
  FaTrash,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  /*
   * Frontend-only processing fee.
   *
   * This is only for demonstrating the
   * checkout calculation. No real payment
   * is processed.
   */
  const processingFee =
    cartItems.length > 0 ? cartTotal * 0.01 : 0;

  const grandTotal = cartTotal + processingFee;

  /*
   * Format Nigerian Naira.
   */
  const formatPrice = (amount) => {
    return `₦${amount.toLocaleString("en-NG", {
      maximumFractionDigits: 0,
    })}`;
  };

  return (
    <main className="cart-page">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <section className="cart-hero">

        <div className="cart-hero-content">

          <FaShoppingCart className="cart-hero-icon" />

          <h1>Your Property Cart</h1>

          <p>
            Review the properties you've selected
            before continuing to checkout.
          </p>

        </div>

      </section>


      {/* ==================================================
          CART CONTENT
      ================================================== */}

      <section className="cart-section">

        <div className="cart-container">

          {cartItems.length === 0 ? (

            /* ==================================================
               EMPTY CART
            ================================================== */

            <div className="empty-cart">

              <div className="empty-cart-icon">

                <FaShoppingCart />

              </div>

              <h2>
                Your Cart Is Empty
              </h2>

              <p>
                You haven't added any properties to your
                cart yet. Browse our available properties
                and select one that interests you.
              </p>

              <Link
                to="/properties"
                className="primary-btn"
              >

                <FaArrowLeft />

                Browse Properties

              </Link>

            </div>

          ) : (

            <>

              {/* ==================================================
                  CART HEADER
              ================================================== */}

              <div className="cart-heading">

                <div>

                  <h2>
                    Selected Properties
                  </h2>

                  <p>
                    {cartCount}{" "}
                    {cartCount === 1
                      ? "item"
                      : "items"}{" "}
                    in your cart
                  </p>

                </div>

                <button
                  className="clear-cart-btn"
                  onClick={clearCart}
                >

                  <FaTrash />

                  Clear Cart

                </button>

              </div>


              {/* ==================================================
                  CART LAYOUT
              ================================================== */}

              <div className="cart-layout">

                {/* ==================================================
                    CART ITEMS
                ================================================== */}

                <div className="cart-items">

                  {cartItems.map((item) => (

                    <article
                      className="cart-item"
                      key={item.id}
                    >

                      {/* Property image */}

                      <div className="cart-item-image">

                        {item.image ===
                        "image placement here" ? (

                          <div className="image-placeholder">

                            "image placement here"

                          </div>

                        ) : (

                          <img
                            src={item.image}
                            alt={item.title}
                          />

                        )}

                      </div>


                      {/* Property information */}

                      <div className="cart-item-content">

                        <div className="cart-item-header">

                          <div>

                            <span className="cart-property-type">

                              {item.type}

                            </span>

                            <h3>
                              {item.title}
                            </h3>

                            <p className="cart-location">

                              <FaMapMarkerAlt />

                              {item.location}

                            </p>

                          </div>

                          <button
                            className="remove-cart-item"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            aria-label={`Remove ${item.title}`}
                          >

                            <FaTrash />

                          </button>

                        </div>


                        {/* Property specifications */}

                        <div className="cart-property-info">

                          {item.bedrooms > 0 && (

                            <span>

                              <FaBed />

                              {item.bedrooms} Beds

                            </span>

                          )}

                          {item.bathrooms > 0 && (

                            <span>

                              <FaBath />

                              {item.bathrooms} Baths

                            </span>

                          )}

                          {item.garages > 0 && (

                            <span>

                              <FaCar />

                              {item.garages} Parking

                            </span>

                          )}

                          <span>

                            <FaRulerCombined />

                            {item.area}

                          </span>

                        </div>


                        {/* Price + quantity */}

                        <div className="cart-item-bottom">

                          <div className="cart-item-price">

                            <span>
                              Property Price
                            </span>

                            <strong>
                              {formatPrice(item.price)}
                            </strong>

                          </div>


                          <div className="quantity-control">

                            <button
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              aria-label="Decrease quantity"
                            >

                              <FaMinus />

                            </button>

                            <span>
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              aria-label="Increase quantity"
                            >

                              <FaPlus />

                            </button>

                          </div>


                          <div className="cart-item-total">

                            <span>
                              Total
                            </span>

                            <strong>
                              {formatPrice(
                                item.price *
                                  item.quantity
                              )}
                            </strong>

                          </div>

                        </div>

                      </div>

                    </article>

                  ))}

                </div>


                {/* ==================================================
                    CART SUMMARY
                ================================================== */}

                <aside className="cart-summary">

                  <div className="summary-header">

                    <h2>
                      Order Summary
                    </h2>

                    <span>
                      {cartCount}{" "}
                      {cartCount === 1
                        ? "item"
                        : "items"}
                    </span>

                  </div>


                  <div className="summary-row">

                    <span>
                      Properties
                    </span>

                    <strong>
                      {formatPrice(cartTotal)}
                    </strong>

                  </div>


                  <div className="summary-row">

                    <span>
                      Processing Fee
                    </span>

                    <strong>
                      {formatPrice(processingFee)}
                    </strong>

                  </div>


                  <div className="summary-note">

                    <FaCheckCircle />

                    <p>
                      This is a frontend-only checkout.
                      No real payment will be processed.
                    </p>

                  </div>


                  <div className="summary-total">

                    <span>
                      Estimated Total
                    </span>

                    <strong>
                      {formatPrice(grandTotal)}
                    </strong>

                  </div>


                  <Link
                    to="/checkout"
                    className="checkout-btn"
                  >

                    Proceed to Checkout

                    <FaArrowRight />

                  </Link>


                  <Link
                    to="/properties"
                    className="continue-shopping"
                  >

                    <FaArrowLeft />

                    Continue Browsing

                  </Link>

                </aside>

              </div>

            </>

          )}

        </div>

      </section>

    </main>
  );
}

export default Cart;