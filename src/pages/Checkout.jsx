import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaCreditCard,
  FaHome,
  FaLock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaPhone,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
    cartCount,
    clearCart,
  } = useCart();

  const [paymentMethod, setPaymentMethod] =
    useState("card");

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "", 
    city: "",
    state: "",
    notes: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const processingFee =
    cartItems.length > 0
      ? cartTotal * 0.01
      : 0;

  const grandTotal =
    cartTotal + processingFee;


  /*
   * Format currency.
   */
  const formatPrice = (amount) => {
    return `₦${amount.toLocaleString("en-NG", {
      maximumFractionDigits: 0,
    })}`;
  };


  /*
   * Handle form changes.
   */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };


  /*
   * Validate checkout form.
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName =
        "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Please enter your phone number.";
    }

    if (!formData.address.trim()) {
      newErrors.address =
        "Please enter your address.";
    }

    if (!formData.city.trim()) {
      newErrors.city =
        "Please enter your city.";
    }

    if (!formData.state.trim()) {
      newErrors.state =
        "Please enter your state.";
    }

    if (paymentMethod === "card") {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber =
          "Please enter a card number.";
      }

      if (!formData.expiryDate.trim()) {
        newErrors.expiryDate =
          "Please enter the expiry date.";
      }

      if (!formData.cvv.trim()) {
        newErrors.cvv =
          "Please enter the CVV.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  /*
   * Submit checkout.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    /*
     * This is a frontend-only checkout.
     *
     * No actual payment is processed.
     */
    setSubmitted(true);

    clearCart();
  };


  /*
   * Prevent checkout without cart items.
   */
  if (cartItems.length === 0 && !submitted) {
    return (
      <main className="checkout-page">

        <section className="checkout-empty">

          <div className="checkout-empty-icon">
            <FaShoppingBag />
          </div>

          <h1>
            Your Cart Is Empty
          </h1>

          <p>
            Add a property to your cart before
            proceeding to checkout.
          </p>

          <Link
            to="/properties"
            className="primary-btn"
          >
            <FaArrowLeft />
            Browse Properties
          </Link>

        </section>

      </main>
    );
  }


  /*
   * Successful order.
   */
  if (submitted) {
    return (
      <main className="checkout-page">

        <section className="order-success">

          <div className="success-icon">
            <FaCheckCircle />
          </div>

          <h1>
            Inquiry Submitted Successfully!
          </h1>

          <p>
            Thank you, {formData.fullName}.
            Your property inquiry has been received.
          </p>

          <p>
            A Prime Estates representative can
            contact you using the information you
            provided.
          </p>

          <div className="success-reference">

            <span>
              Reference Number
            </span>

            <strong>
              PE-{Date.now().toString().slice(-8)}
            </strong>

          </div>

          <div className="success-actions">

            <Link
              to="/properties"
              className="primary-btn"
            >
              Browse More Properties
            </Link>

            <Link
              to="/"
              className="secondary-btn"
            >
              Back to Home
            </Link>

          </div>

        </section>

      </main>
    );
  }


  return (
    <main className="checkout-page">

      {/* ==================================================
          CHECKOUT HEADER
      ================================================== */}

      <section className="checkout-hero">

        <div>

          <FaLock />

          <h1>
            Secure Property Checkout
          </h1>

          <p>
            Complete your information to submit
            your property inquiry.
          </p>

        </div>

      </section>


      {/* ==================================================
          CHECKOUT CONTENT
      ================================================== */}

      <section className="checkout-section">

        <div className="checkout-container">

          {/* ==================================================
              CUSTOMER FORM
          ================================================== */}

          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >

            <div className="checkout-card">

              <div className="checkout-card-heading">

                <FaUser />

                <div>

                  <h2>
                    Contact Information
                  </h2>

                  <p>
                    Tell us how we can reach you.
                  </p>

                </div>

              </div>


              {/* Full name */}

              <div className="form-group">

                <label htmlFor="fullName">
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />

                {errors.fullName && (
                  <small className="form-error">
                    {errors.fullName}
                  </small>
                )}

              </div>


              <div className="form-two-columns">

                {/* Email */}

                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <small className="form-error">
                      {errors.email}
                    </small>
                  )}

                </div>


                {/* Phone */}

                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  {errors.phone && (
                    <small className="form-error">
                      {errors.phone}
                    </small>
                  )}

                </div>

              </div>


              {/* Address */}

              <div className="form-group">

                <label htmlFor="address">
                  Address
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />

                {errors.address && (
                  <small className="form-error">
                    {errors.address}
                  </small>
                )}

              </div>


              <div className="form-two-columns">

                {/* City */}

                <div className="form-group">

                  <label htmlFor="city">
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="e.g. Abuja"
                    value={formData.city}
                    onChange={handleChange}
                  />

                  {errors.city && (
                    <small className="form-error">
                      {errors.city}
                    </small>
                  )}

                </div>


                {/* State */}

                <div className="form-group">

                  <label htmlFor="state">
                    State
                  </label>

                  <input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="e.g. FCT"
                    value={formData.state}
                    onChange={handleChange}
                  />

                  {errors.state && (
                    <small className="form-error">
                      {errors.state}
                    </small>
                  )}

                </div>

              </div>


              {/* Notes */}

              <div className="form-group">

                <label htmlFor="notes">
                  Additional Message
                </label>

                <textarea
                  id="notes"
                  name="notes"
                  rows="5"
                  placeholder="Tell us anything else you'd like us to know..."
                  value={formData.notes}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* ==================================================
                PAYMENT METHOD
            ================================================== */}

            <div className="checkout-card">

              <div className="checkout-card-heading">

                <FaCreditCard />

                <div>

                  <h2>
                    Payment Method
                  </h2>

                  <p>
                    Select your preferred payment option.
                  </p>

                </div>

              </div>


              <div className="payment-methods">

                {/* Card */}

                <label
                  className={
                    paymentMethod === "card"
                      ? "payment-option selected"
                      : "payment-option"
                  }
                >

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={
                      paymentMethod === "card"
                    }
                    onChange={(event) =>
                      setPaymentMethod(
                        event.target.value
                      )
                    }
                  />

                  <FaCreditCard />

                  <span>
                    Card Payment
                  </span>

                </label>


                {/* Bank Transfer */}

                <label
                  className={
                    paymentMethod === "transfer"
                      ? "payment-option selected"
                      : "payment-option"
                  }
                >

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={
                      paymentMethod === "transfer"
                    }
                    onChange={(event) =>
                      setPaymentMethod(
                        event.target.value
                      )
                    }
                  />

                  <FaMoneyBillWave />

                  <span>
                    Bank Transfer
                  </span>

                </label>

              </div>


              {/* Card fields */}

              {paymentMethod === "card" && (

                <div className="payment-fields">

                  <div className="form-group">

                    <label htmlFor="cardNumber">
                      Card Number
                    </label>

                    <input
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      inputMode="numeric"
                      maxLength="19"
                      placeholder="0000 0000 0000 0000"
                      value={formData.cardNumber}
                      onChange={handleChange}
                    />

                    {errors.cardNumber && (
                      <small className="form-error">
                        {errors.cardNumber}
                      </small>
                    )}

                  </div>


                  <div className="form-two-columns">

                    <div className="form-group">

                      <label htmlFor="expiryDate">
                        Expiry Date
                      </label>

                      <input
                        id="expiryDate"
                        name="expiryDate"
                        type="text"
                        maxLength="5"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleChange}
                      />

                      {errors.expiryDate && (
                        <small className="form-error">
                          {errors.expiryDate}
                        </small>
                      )}

                    </div>


                    <div className="form-group">

                      <label htmlFor="cvv">
                        CVV
                      </label>

                      <input
                        id="cvv"
                        name="cvv"
                        type="password"
                        inputMode="numeric"
                        maxLength="4"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                      />

                      {errors.cvv && (
                        <small className="form-error">
                          {errors.cvv}
                        </small>
                      )}

                    </div>

                  </div>

                </div>

              )}


              {paymentMethod === "transfer" && (

                <div className="transfer-info">

                  <FaMoneyBillWave />

                  <div>

                    <strong>
                      Bank Transfer Selected
                    </strong>

                    <p>
                      Our representative will provide
                      verified payment instructions after
                      reviewing your property inquiry.
                    </p>

                  </div>

                </div>

              )}

            </div>


            {/* ==================================================
                SUBMIT
            ================================================== */}

            <div className="checkout-submit-area">

              <div className="checkout-security">

                <FaLock />

                <span>
                  Frontend demonstration only.
                  No real payment is processed.
                </span>

              </div>

              <button
                type="submit"
                className="submit-checkout-btn"
              >

                Submit Property Inquiry

                <FaCheckCircle />

              </button>

            </div>

          </form>


          {/* ==================================================
              ORDER SUMMARY
          ================================================== */}

          <aside className="checkout-summary">

            <div className="checkout-summary-header">

              <h2>
                Your Selection
              </h2>

              <span>
                {cartCount}{" "}
                {cartCount === 1
                  ? "item"
                  : "items"}
              </span>

            </div>


            <div className="checkout-property-list">

              {cartItems.map((item) => (

                <div
                  className="checkout-property"
                  key={item.id}
                >

                  <div className="checkout-property-image">

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

                  <div className="checkout-property-info">

                    <h3>
                      {item.title}
                    </h3>

                    <p>

                      <FaMapMarkerAlt />

                      {item.location}

                    </p>

                    <span>
                      Quantity: {item.quantity}
                    </span>

                    <strong>
                      {formatPrice(
                        item.price *
                          item.quantity
                      )}
                    </strong>

                  </div>

                </div>

              ))}

            </div>


            <div className="checkout-totals">

              <div>

                <span>
                  Properties
                </span>

                <strong>
                  {formatPrice(cartTotal)}
                </strong>

              </div>

              <div>

                <span>
                  Processing Fee
                </span>

                <strong>
                  {formatPrice(processingFee)}
                </strong>

              </div>

              <div className="checkout-grand-total">

                <span>
                  Estimated Total
                </span>

                <strong>
                  {formatPrice(grandTotal)}
                </strong>

              </div>

            </div>


            <Link
              to="/cart"
              className="back-cart-link"
            >

              <FaArrowLeft />

              Return to Cart

            </Link>

          </aside>

        </div>

      </section>

    </main>
  );
}

export default Checkout;