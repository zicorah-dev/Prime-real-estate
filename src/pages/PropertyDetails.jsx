// import luxduplex from "../assets/images/luxury terrace duplex.jpg"
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaBed,
  FaBath,
  FaCar,
  FaCheckCircle,
  FaCheck,
  FaHome,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaShoppingCart,
  FaTag,
} from "react-icons/fa";

import properties from "../data/properties";
import { useCart } from "../context/CartContext";

function PropertyDetails() {
  const { id } = useParams();

  const { addToCart, isInCart, cartCount } = useCart();

  const [addedMessage, setAddedMessage] = useState("");

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  /*
   * Handle invalid property IDs.
   */
  if (!property) {
    return (
      <main className="property-not-found">

        <div className="property-not-found-content">

          <FaHome className="not-found-icon" />

          <h1>Property Not Found</h1>

          <p>
            The property you're looking for may have been
            removed or the link may be incorrect.
          </p>

          <Link
            to="/properties"
            className="primary-btn"
          >
            <FaArrowLeft />
            Back to Properties
          </Link>

        </div>

      </main>
    );
  }

  /*
   * Add property to cart.
   */
  const handleAddToCart = () => {
    addToCart(property);

    setAddedMessage(
      `${property.title} has been added to your cart.`
    );

    setTimeout(() => {
      setAddedMessage("");
    }, 3000);
  };

  const alreadyInCart = isInCart(property.id);

  return (
    <main className="property-details-page">

      {/* ==================================================
          BREADCRUMB
      ================================================== */}

      <div className="property-breadcrumb">

        <Link to="/">
          Home
        </Link>

        <span>/</span>

        <Link to="/properties">
          Properties
        </Link>

        <span>/</span>

        <span>{property.title}</span>

      </div>


      {/* ==================================================
          PROPERTY DETAILS
      ================================================== */}

      <section className="property-details">

        <div className="property-details-container">

          {/* ==================================================
              PROPERTY IMAGE
          ================================================== */}

          <div className="property-gallery">

            <div className="main-property-image">

              {property.image ===  <img src={property.image} alt={property.title}/> ? (

                <div className="image-placeholder">

                  <img src={property.image} alt={property.title}/>

                </div>

              ) : (

                <img
                  src={property.image}
                  alt={property.title}
                />

              )}

              <span className="details-status">

                {property.status}

              </span>

            </div>

            <div className="gallery-note">

              <span>
             <img src={property.image} alt={property.title}/>
              </span>

              <span>
               <img src={property.image} alt={property.title}/>
              </span>

              <span>
             <img src={property.image} alt={property.title}/>
              </span>

            </div>

          </div>


          {/* ==================================================
              PROPERTY INFORMATION
          ================================================== */}

          <div className="property-details-content">

            <span className="property-type-label">

              {property.type}

            </span>

            <h1>{property.title}</h1>

            <p className="details-location">

              <FaMapMarkerAlt />

              {property.location}

            </p>

            <div className="details-price">

              ₦{property.price.toLocaleString()}

            </div>


            {/* PROPERTY SPECS */}

            <div className="property-specifications">

              {property.bedrooms > 0 && (

                <div className="specification">

                  <FaBed />

                  <div>
                    <strong>
                      {property.bedrooms}
                    </strong>

                    <span>
                      Bedrooms
                    </span>
                  </div>

                </div>

              )}

              {property.bathrooms > 0 && (

                <div className="specification">

                  <FaBath />

                  <div>
                    <strong>
                      {property.bathrooms}
                    </strong>

                    <span>
                      Bathrooms
                    </span>
                  </div>

                </div>

              )}

              {property.garages > 0 && (

                <div className="specification">

                  <FaCar />

                  <div>
                    <strong>
                      {property.garages}
                    </strong>

                    <span>
                      Parking 
                    </span>
                  </div>

                </div>

              )}

              <div className="specification">

                <FaRulerCombined />

                <div>
                  <strong>
                    {property.area}
                  </strong>

                  <span>
                    Property Area
                  </span>
                </div>

              </div>

            </div>


            {/* DESCRIPTION */}

            <div className="property-description-details">

              <h2>
                Property Description
              </h2>

              <p>
                {property.description}
              </p>

              <p>
                This property offers a carefully designed
                living environment suitable for families,
                professionals and investors. Prime Estates
                provides verified property information to
                help you make confident real estate decisions.
              </p>

            </div>


            {/* FEATURES */}

            <div className="property-features-details">

              <h2>
                Property Features
              </h2>

              <div className="details-feature-grid">

                {property.features.map(
                  (feature, index) => (

                    <div
                      className="details-feature"
                      key={index}
                    >

                      <FaCheckCircle />

                      <span>
                        {feature}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* ADD TO CART */}

            <div className="purchase-area">

              <div className="purchase-info">

                <FaTag />

                <div>

                  <strong>
                    Interested in this property?
                  </strong>

                  <p>
                    Add it to your cart to continue
                    with the frontend checkout process.
                  </p>

                </div>

              </div>

              <button
  type="button"
  className={
    isInCart
      ? "property-cart-btn added"
      : "property-cart-btn"
  }
  onClick={() => addToCart(property)}
>
  {isInCart ? (
    <>
      <FaCheck />
       Add to Cart
    </>
  ) : (
    <>
      <FaShoppingCart />
      Added to Cart
    </>
  )}
</button>

            </div>


            {/* SUCCESS MESSAGE */}

            {addedMessage && (

              <div className="cart-success-message">

                <FaCheckCircle />

                <span>
                  {addedMessage}
                </span>

              </div>

            )}

            {/* VIEW CART */}

            {alreadyInCart && (

              <Link
                to="/cart"
                className="view-cart-link"
              >

                <FaShoppingCart />

                View Cart ({cartCount})

              </Link>

            )}

          </div>

        </div>

      </section>


      {/* ==================================================
          BACK TO LISTINGS
      ================================================== */}

      <section className="back-to-properties">

        <Link
          to="/properties"
          className="secondary-btn"
        >

          <FaArrowLeft />

          Back to All Properties

        </Link>

      </section>

    </main>
  );
}

export default PropertyDetails;